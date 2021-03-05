# iocage-network-wireguard

## Installing Plugins
Download the plugin manifest file to your local file system.

```bash
fetch https://raw.githubusercontent.com/PiESTR-TrueNAS/iocage-network-wireguard/master/manifest.json
```

Install the plugin. Adjust the network settings as needed.
```bash
iocage fetch -P manifest.json
```


## FAQ

- **Extending functionality**
> A mountpoint can be added to the jail as `/mnt/W`. This one will be populated by a [skeleton][1] on jail restart allowing you to change web endpoint environment and firewall rules.


## Sources
- https://sirtoffski.github.io/docs/freebsd-ipfw/
- https://github.com/SirToffski/WireGuard-Ligase



[1]:./overlay/WIREGUARD/COMMON/SKELETON
