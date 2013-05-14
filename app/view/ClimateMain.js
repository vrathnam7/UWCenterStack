Ext.define('UWCenterStack.view.ClimateMain', {
	extend: 'Ext.Container',
	requires: ['Ext.Button'],
	xtype: 'climatemain',

	config: {
		layout: 'hbox',
		items: [
			{
				xtype: 'container',
				id: 'leftNav',
	            defaults: {
	                xtype: 'button'
	            },
	            items: [
	                {
	                    id: 'climateHomeButton',
	                    name: 'goHome'
	                },
	                {
	                    id: 'tempButton',
	                    text: 'Temp'
	                },
	                {
	                    id: 'fanButton',
	                    text: 'Fan'
	                },
	                {
	                    id: 'seatButton',
	                    text: 'Seats'
	                },
	                {
	                    id: 'ventButton',
	                    text: 'Vent'
	                }
	            ]
			},
			{
				xtype: 'dialselector',
				id: 'climate',
				position: 'absolute',
				left: '60%',
				top: '0px',
				width: '90%'
			},
			{
				xtype: 'container',
				id: 'rightNav',
	            defaults: {
	                xtype: 'button'
	            },
	            items: [
	                {
	                    id: 'passDriverSwitch',
	                    text: 'Driver/Pass'
	                },
	                {
	                    id: 'acButton',
	                    text: 'A/C'
	                },
	                {
	                    id: 'defrostButton',
	                    text: 'Defrost'
	                },
	                {
	                    id: 'circulateButton',
	                    text: 'Circulate'
	                },
	                {
	                    id: 'autoButton',
	                    text: 'AUTO'
	                }
	            ]
			}
		]
	}
})