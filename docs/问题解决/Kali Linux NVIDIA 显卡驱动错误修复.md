---
title: Kali Linux NVIDIA 显卡驱动错误修复
createTime: 2025/03/12 15:11:31
permalink: /article/1p7iixrg/
---

我目前使用的电脑是联想 Legion R9000P ARX8，拥有 NVIDIA GeForce RTX 4060 Laptop 独立显卡，并安装了多系统，其中 Kali Linux 在使用过程中多次出现显卡驱动异常导致无法进入图形界面的现象，两个多月已经出现了两次，特此把修复过程记录在此，经验应该也适用于其他基于 Debian 的发行版桌面系统。

主要参考：==[Install NVIDIA GPU Drivers | Kali Linux Documentation](https://www.kali.org/docs/general-use/install-nvidia-drivers-on-kali-linux)==

## 检测 NVIDIA 显卡

```bash
sudo apt install -y nvidia-detect
nvidia-detect
```

::: card title="回显"

```txt:no-line-numbers
Detected NVIDIA GPUs:
01:00.0 3D controller [0302]: NVIDIA Corporation GM108M [GeForce 940MX] [10de:134d] (rev a2)

Checking card:  NVIDIA Corporation GM108M [GeForce 940MX] (rev a2)
Uh oh. Failed to identify your Debian suite.
```

:::

## 安装显卡驱动

1. 安装内核头文件和 kbuild 基础设施：

   ```bash
   sudo apt install -y linux-headers-amd64
   ```

2. 安装驱动程序：

   ```bash
   sudo apt install -y nvidia-driver nvidia-cuda-toolkit
   ```

3. 重启：

   ```bash
   sudo reboot -f
   ```

重启之后，应该能够正常进入图形桌面。

## 验证安装

```bash
nvidia-smi
lspci | grep -i vga
lspci -s 07:00.0 -v
```

::: card title="回显"

```txt:no-line-numbers
Tue Jan 28 11:37:47 2020
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 430.64       Driver Version: 430.64       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 106...  Off  | 00000000:07:00.0  On |                  N/A |
|  0%   50C    P8     7W / 120W |    116MiB /  6075MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|    0       807      G   /usr/lib/xorg/Xorg                           112MiB |
|    0       979      G   xfwm4                                          2MiB |
+-----------------------------------------------------------------------------+
07:00.0 VGA compatible controller: NVIDIA Corporation GP106 [GeForce GTX 1060 6GB] (rev a1)
[...]
        Kernel driver in use: nvidia
        Kernel modules: nvidia
```

:::

至此应该重新安装完成了驱动。
