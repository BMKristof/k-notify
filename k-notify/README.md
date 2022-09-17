# K | Notification
Thank you for your purchase! Here's how to use the notification!

# Client side

```lua
exports["k-notify"]:SendNotify('type', 'title', 'Message', time)

```

# Server side
```lua

TriggerClientEvent('knotify:notify', source, "type", "Title", 'message', time)

```

# Types:

```lua

--success
--error
--info

```

# Examples

```lua
exports["k-notify"]:SendNotify('info', 'INFO', 'This is a info notification', 5000)
exports["k-notify"]:SendNotify('error', 'Error', 'This is a error notification', 5000)

```
