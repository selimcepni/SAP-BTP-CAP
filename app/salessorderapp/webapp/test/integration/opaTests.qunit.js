sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'anubhav/app/salessorderapp/test/integration/FirstJourney',
		'anubhav/app/salessorderapp/test/integration/pages/OrderSetList',
		'anubhav/app/salessorderapp/test/integration/pages/OrderSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderSetList, OrderSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('anubhav/app/salessorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetList: OrderSetList,
					onTheOrderSetObjectPage: OrderSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);