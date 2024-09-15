---
title: 动态库链接踩坑记录
sidebar: true
# isShowComments: true
---

# 动态库链接踩坑记录

<ClientOnly>
<title-pv/>
</ClientOnly>

```
import torch
```
在导入torch包时，出现了动态库链接不存在的错误，起初是以为缺少C++依赖，修复失败，查阅资料后得知是dll缺少相关依赖

解决方案：下载动态库依赖分析程序：[分析工具](https://github.com/lucasg/Dependencies/tree/v1.11.1)

将提示load失败或不存在的ddl放入该分析工具，得知是缺少libomp140.x86_64.dll文件

从该网址下载libomp140.x86_64.dll：[动态库依赖文件](https://www.dllme.com/dll/files/libomp140_x86_64/00637fe34a6043031c9ae4c6cf0a891d/download)

将dll文件放入'/Windows/SysWOW64'和'/Windows/System32'文件夹

然后重启应用，问题解决

<ClientOnly>
  <leave/>
</ClientOnly/>