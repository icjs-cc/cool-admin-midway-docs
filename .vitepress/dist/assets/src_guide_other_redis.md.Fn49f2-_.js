import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework._6WXoDa9.js";const g=JSON.parse('{"title":"redis 集群","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/other/redis.md","filePath":"src/guide/other/redis.md","lastUpdated":null}'),t={name:"src/guide/other/redis.md"},n=e(`<h1 id="redis-集群" tabindex="-1">redis 集群 <a class="header-anchor" href="#redis-集群" aria-label="Permalink to &quot;redis 集群&quot;">​</a></h1><p>redis 集群有多种方式，主从、代理(proxy)、哨兵等，cool-admin 任务、队列、微服务包括 socket 的分布式都基于 redis 实现，cluster 方案对 cool-admin 是最兼容的方案。</p><h2 id="cluster-集群" tabindex="-1">cluster 集群 <a class="header-anchor" href="#cluster-集群" aria-label="Permalink to &quot;cluster 集群&quot;">​</a></h2><p>1、每个服务器都安装好 redis，建议通过宝塔一键安装方便配置；</p><p>2、开放端口 6379 及集群总线端口 10000+客户端端口(6379) = 16379；</p><p>3、修改配置文件</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bind 本机ip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cluster-enabled yes  #开启集群</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cluster-config-file nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.conf   #集群节点配置文件，这个文件是不能手动编辑的。确保每一个集群节点的配置文件不通</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cluster-node-timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #集群节点的超时时间，单位：ms，超时后集群会认为该节点失败</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">appendonly yes  #持久化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">daemonize yes   #守护进程</span></span></code></pre></div><p>4、创建集群</p><p>创建 3 主 3 从的集群</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cluster</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip1:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip2:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip3:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip4:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip5:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip6:6379</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cluster-replicas</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意开放端口，安全组也需要配置</p></div>`,11),l=[n];function p(h,r,d,k,c,o){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
