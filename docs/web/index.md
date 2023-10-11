## [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)

#### Cache-control

- No-cache：指示web浏览器不要立即引用缓存，而是在服务器上验证内容。如果它是新鲜的，那么它可以从缓存中提供。
- No-store：不使用缓存，每次都向服务器请求
- Public：可以被所有用户缓存，包括终端用户和CDN等中间代理服务器
- Private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存
- max-age：缓存的内容将在多少秒后失效
- s-maxage：覆盖max-age或者expires头，但是仅适用于共享缓存（比如CDN），私有缓存会忽略它
- must-revalidate：如果缓存失效，那么在使用缓存之前，必须先确认其有效性
- proxy-revalidate：与must-revalidate类似，但是它仅适用于共享缓存（比如CDN），私有缓存会忽略它
- no-transform：不允许缓存对资源进行转换，比如压缩等

#### Etag

Etag响应头用于标识特定的资源。每次某个资源改变时，都会生成一个新的Etag。这样可以节省带宽，因为如果Etag没有改变，web服务器不需要给出完整的响应。因此，Etag头文件在Nginx和Apache上是默认启用的，并且Etag值是自动生成的，所以你不需要指定任何值。

#### Expires

这是在HTTP/1.0中引入的，并定义了未来某个特定的日期，此时的内容将被视为过时。例如, Expires: Thu, 25 May 2017 12:30:00 GMT 

#### Pragma

这是一个有点过时的HTTP/1.0首部，主要用于向后兼容。插入Pragma: no-cache可以让浏览器的行为类似于Cache-Control: no-cache。

#### 实验

在谷歌浏览器 `116.0.5845.111` 下做实验，当从浏览器地址栏输入网址（第一次访问的网址）时，浏览器会发送请求，请求头中包含 `Cache-Control: no-cache` 和 `Pragma: no-cache`。

在 nginx 的默认配置 `etag on;` 下，nginx 会返回 `Etag` 响应头。浏览器会将 `Etag` 值保存在本地，下次再访问相同的网址时，会将 `Etag` 值放在请求头中，发送给服务器。服务器会将 `Etag` 值与服务器上的 `Etag` 值进行比较，如果相同，则返回 `304` 状态码，浏览器直接从本地缓存中读取数据，不会再发送请求。

当在 nginx 配置 `etag off;` 时，浏览器不会发送 `Etag` 值，而是发送 `If-Modified-Since` 值，服务器会将 `If-Modified-Since` 值与服务器上的 `Last-Modified` 值进行比较，如果相同，则返回 `304` 状态码，浏览器直接从本地缓存中读取数据，不会再发送请求。

当在 nginx 配置 `etag off;` 和 `add_header Last-Modified "";` 时，返回的响应头中不包含 `Last-Modified` 和 `Etag` 值，浏览器会发送请求，服务器会返回 `200` 状态码，**浏览器 会 将数据保存在本地磁盘中，且每次请求都会更新本地的缓存，通过 ChromeCacheView 工具得出结论**。

当在 nginx 配置 `add_header Cache-Control no-store;` 时，浏览器会发送请求，服务器会返回 `200` 状态码，**但浏览器 不会 将数据保存在本地磁盘中**。

下面表格记录了我的实验结果：

|  nginx配置   | 浏览器是否缓存  | 是否从本地缓存中读取数据  | 二次请求响应 | 备注 |
|  ----  | ----  |  ----  | ----  | ----  |
| `etag on;`  | 是 | `ETag` 和 `If-None-Match` 比较  | 是 304 / 否 200 | |
| `etag off;`  | 是 | `If-Modified-Since` 和 `Last-Modified` 比较 | 是 304 / 否 200 | |
| `etag off; add_header Last-Modified "";`  | 是 | 否 | 200 | 每次请求都会更新本地的缓存 |
| `etag off; add_header Last-Modified "";add_header Cache-Control max-age=60;`  | 是 | 是（注意下面 warning） | 200 | 60秒后请求都会更新本地的缓存 |
| `add_header Cache-Control no-store;`  | 否 | 否 | 200 | |

:::warning
* 谷歌Chrome会忽略Cache-Control或者Expires头，如果你在同一个选项卡中对同一个URI的另一个请求之后立即发出请求(通过点击刷新按钮，按F5键或者按Command + R)。它可能有一个算法来猜测用户真正想做什么。
* 测试时，开启新的 tab 页来看效果。
:::


#### Fetch

上面的实验中，我们使用的是浏览器地址栏输入网址的方式，这种方式会发送请求，但是如果是通过 `fetch` 发送请求，会怎么样呢？

fetch 默认利用缓存的方式与浏览器不同，它会先从本地缓存中读取数据，如果没有数据，才会发送请求。如果服务器返回的响应头中包含 `Cache-Control: no-cache` 或 `Pragma: no-cache`，则不会从本地缓存中读取数据，而是直接发送请求验证资源的新鲜度，如果资源有效则返回 304，从本地磁盘读取。否则重新从服务器获取资源，返回 200。

但是可以通过 fetch 的 [cache 配置](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)，更改缓存读取的策略。

## xhr 和 fetch 区别

#### XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/service");

// state change event
xhr.onreadystatechange = () => {
  // is request complete?
  if (xhr.readyState !== 4) return;

  if (xhr.status === 200) {
    // request successful
    console.log(JSON.parse(xhr.responseText));
  } else {
    // request not successful
    console.log("HTTP error", xhr.status, xhr.statusText);
  }
};

// start request
xhr.send()
```

回调函数 `onreadystatechange` 在请求的整个生命周期中运行多次。对象 `XMLHttpRequest` 的 `readyState` 属性返回当前状态：

- 0（未初始化）-请求未初始化
- 1（正在加载）- 已建立服务器连接
- 2（已加载）-收到请求
- 3（交互）-处理请求
- 4（完成）- 请求完成，响应准备就绪

在达到状态 `4` 之前，很少有函数可以做很多事情。正如您所看到的，使用此方法需要您了解一点 `HTTP` 的内部工作原理及其不同状态。


#### Fetch

```js
fetch("/service", { method: "GET" })
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:", err));
```

Fetch更干净、更简单，并且经常在 [Service Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API) 中使用。使用 Fetch API 方法，您实际上只关心要发送的请求以及要获得的响应。HTTP 的复杂性被抽象掉了。

## 跨域


### Origin

协议 + 主机名 + 端口


| 源A | 源B | 源A和源B是否 “同源” / “跨源” 的解释 |
|  ----  | ----  |  ----  |
| https://www.example.com:443 | https://www.evil.com:443 | 跨源：域不同 |
| | https://example.com:443 | 跨源：子域不同 |
| | https://login.example.com:443 | 跨源：子域不同 |
| | http://www.example.com:443 | 跨源：方案不同 |
| | https://www.example.com:80 | 跨源：端口不同 |
| | https://www.example.com:443 | 同源：完全匹配 |
| | https://www.example.com | 同源：隐式端口号 (443) 匹配 |


### site

[参考](https://web.dev/i18n/zh/same-site-same-origin/)

`.com` `.org` 可作为 “有效 TLD”(eTLD) 。

`.jp` 或 `.io` 的 TLD  不足以识别“站点”，`.github.io` 可作为 “有效 TLD”(eTLD) 。

`site` 则是 `eTLD + 1`。

`https://www.example.com:443/foo` ，则“站点”为 `example.com`。

`https://my-project.github.io`，则 eTLD 为 `.github.io`，而 eTLD+1 则为 `my-project.github.io`，这就是一个“站点”。

| 源A | 源B | 源A和源B是否 “同站” / “跨站” 的解释 |
|  ----  | ----  |  ----  |
| https://www.example.com:443 | https://www.evil.com:443 | 跨站：域不同 |
| | https://login.example.com:443 | 同站：子域不同无关紧要 |
| | http://www.example.com:443 | 同站：方案不同无关紧要 |
| | https://www.example.com:80 | 同站：端口不同无关紧要 |
| | https://www.example.com:443 | 同站：完全匹配 |
| | https://www.example.com | 同站：端口无关紧要 |


### 如何检查请求是“同站”、“同源”还是“跨站” 

就是浏览器会自己加这写请求头，服务端根据请求头处理请求！

Chrome 将请求与 `Sec-Fetch-Site` HTTP 标头一起发送。截至 2020 年 4 月，没有其他浏览器支持 `Sec-Fetch-Site`。该标头的值为以下之一：

- cross-site
- same-site
- same-origin
- none

通过检查 `Sec-Fetch-Site` 的值，您可以确定请求是“同站”、“同源”还是“跨站”（“有方案同站”不是在 `Sec-Fetch-Site` 中获取）。


### 解决跨域

解决跨域的问题的方法有：CORS，代理，jsonp

###### CORS

CORS 将请求分为两类：

###### 1. 简单请求

  - 请求方法为 `GET` `POST` `HEAD`
  - 头部字段满足 `CORS` 安全规范，详见 [MDN](https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_request_header)。（只要不去改就是安全的，改了不一定不安全）
  - 请求头的 `Content-Type` 为
     - `text/plain`
     - `multipart/form-data`
     - `application/x-www-form-url-urlencoded`

过程

简单请求的头部会有 `Origin: http://my.com`。

处理跨域响应头需要为：`Access-Control-Allow-Origin: http://my.com` 或 `Access-Control-Allow-Origin: *`。
  
###### 2. 预检请求

  不是简单请求就是预检请求。控制台请求带有 `preflight`。

过程

1. 浏览器第一步不会真实发送请求，而是先发送一个询问请求 `OPTIONS`。

```
OPTIONS /api/user HTTP/1.1

Host: corssdoain.com
...
Origin: http://my.com
Access-Control-Request-Method: POST // 请求的方法
Access-Control-Request-Headers: a,b,content-type // 改变了哪些请求头

```
服务器给出回应

```
HTTP/1.1 200 OK
Date: Tue, 21 Apr...
...
Access-Control-Allow-Origin: http://my.com      // 允许这些源跨域
Access-Control-Allow-Methods: POST              // 允许这些请求方法
Access-Control-Allow-Headers: a,b,content-type  // 允许这些请求头
Access-Control-Max-Age: 86400                   // 在这个时间内的 http://my.com 这个源，你别再询问我了，可以直接访问资源
```

2. 通过预检请求后，发送真实请求，就和简单请一样了。


###### JSONP

在同源策略中，浏览器对标签的限制很小。利用这一点，不用 AJAX 利用标签进行跨域请求。

```html
<script src="跨域地址"></script>
<script>

  // 前端准备 callback 函数
  // 后端返回 js 字符串， 来调用该函数
  // "callbackAAA([1,2,3])"
  function callbackAAA(params) {
    
  }
</script>
```

###### 代理
  

 

   