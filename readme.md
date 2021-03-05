# {{PLUGIN_NAME}}

## Installing Plugins
Download the plugin manifest file to your local file system.

```bash
fetch https://raw.githubusercontent.com/PiESTR-TrueNAS/{{PLUGIN_NAME}}/master/manifest.json
```

Install the plugin. Adjust the network settings as needed.
```bash
iocage fetch -P manifest.json
```