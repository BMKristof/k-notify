function SendNotify(type,title, text, length)
	SendNUIMessage({
		action = "notify",
		type = type,
		title = title,
		text = text,
		length = length
	})
end



AddEventHandler('knotify:notify')
RegisterNetEvent('knotify:notify', function(text,title,  type, duration)
	local duration
	if duration == nil then duration = 2500 end
	SendNotify(type, title, text, duration)
end)
