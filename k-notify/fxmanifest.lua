fx_version 'adamant'
game 'gta5'
description 'Notification System'
author '</Kristof-_->'
version 'v1.0'

ui_page {
    'nui/index.html',
}

files {
	'nui/index.html',
	'nui/js/*.js', 
    'nui/img/*.png', 
    'nui/css/*.css',
    'nui/sound/*.mp3',
}

client_scripts {
	'client.lua',
}

exports {
	'SendNotify'
,
}

