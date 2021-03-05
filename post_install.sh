#!/bin/sh

# This script gets executed inside the jail right after plugin installation
# This is executed BEFORE any jailman scripts

# Constants --------------------------------------------------------------------
CRONFILE="/tmp/cronfile"
SYSCTLFILE="/etc/sysctl.conf"


# Configure the cron -----------------------------------------------------------
# Add a sleep to ensure that everything is ready before running script.
cat <<EOF > ${CRONFILE}
# One time run -----------------------------------------------------------------
@reboot sleep 10; /WIREGUARD/COMMON/setup
@reboot sleep 10; /WIREGUARD/FIREWALL/ipfw default

# Continuously running ---------------------------------------------------------
@reboot sleep 10; /WIREGUARD/APP/watch
@reboot sleep 10; /WIREGUARD/WEB/watch
EOF
crontab -u root "${CRONFILE}"


# Configure kernel -------------------------------------------------------------
cat <<EOF >> ${SYSCTLFILE}
net.inet.tcp.tso="0"
net.inet.ip.forwarding="1"
EOF


# Configure services -----------------------------------------------------------
# Firewall
sysrc firewall_enable="YES"
sysrc firewall_nat_enable="YES"
sysrc firewall_script="/WIREGUARD/FIREWALL/ipfw default"
sysrc firewall_logging="YES"

# To allow NAT
sysrc gateway_enable="YES"

# WireGuard
sysrc wireguard_enable="YES"
sysrc wireguard_interfaces="/WIREGUARD/APP/wg0.conf"

# WireGuard API
sysrc wireguardapi_enable="YES"
sysrc wireguardapi_device="wg0"
sysrc wireguardapi_logging="YES"

# WireGuard Web
sysrc wireguardweb_enable="YES"
sysrc wireguardweb_dir="/WIREGUARD/WEB"
sysrc wireguardweb_logging="YES"
