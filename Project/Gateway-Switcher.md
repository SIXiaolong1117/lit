---
outline: deep
---

# 网关切换器 (Gateway Switcher)

一个基于 WinUI3 的网关切换器 (Gateway Switcher)。 可以实现在多个网络配置预设中快速切换。

## 下载/Download

### 从 Microsoft Store 获取（推荐）

[<img src="https://get.microsoft.com/images/zh-cn%20light.svg"  width="30%" height="30%">](https://apps.microsoft.com/detail/9PDQC93R0WLF)

### 从 Releases 获取自签名版（废弃）

*我已不再继续更新自签名版本*

## 功能简述

![](https://raw.githubusercontent.com/Direct5dom/NetworkSelector/master/README/1.png)

Windows 无法“保存”网络设置，当你在系统设置中将网络设置成“DHCP (自动)”后，如果切换回“手动”，之前设置的所有内容都会被丢弃。

这对于那些有着多个网关、IP地址、DNS服务器，且需要频繁切换的特殊用户群体来说十分不方便，因此我便开发了这个应用。

我本人所需的具体应用场景是切换网关服务器，决定流量是否要从 OpenWRT 旁路网关经过，两条流量路径如下：

![](https://github.com/Direct5dom/NetworkSelector/blob/master/README/%E7%BD%91%E7%BB%9C%E6%8B%93%E6%89%91.png?raw=true)

因为有本应用的存在，每次需要重新填写大量内容的操作被简化成双击左键。但是本应用不止可以用于快速切换网关，还可以用于不同网络环境下固定IP地址的切换、DNS服务器的切换等。

### 有关 IPv6 的说明

作者对该软件的需求来自对 OpenWRT 旁路网关的使用，而因为众所周知的问题，IPv6 的流量很难通过简单的网关指向来让 OpenWRT 中的插件进行代理，绝大多数情况下也建议关闭 IPv6 来防止流量无法被完全代理的情况。因此本工具提供了快速禁用/启用 IPv6 的功能，同时所有设置项均不支持 IPv6，在可预见的未来也不会支持（因为没有需求）。

## 添加/修改配置

### 配置别名

给当前配置的别名。

### IP地址

设备所固定使用的IP地址。

### 子网掩码

网段所用子网掩码。

### 网关

希望指向的网关。

### IPv4 首选 DNS

首选 DNS 服务器。

### IPv4 次选 DNS

次选 DNS 服务器。

## 导入/导出配置

您可以将您的配置内容导出成一个配置文件，其内容编写格式符合 JSON 标准。