import { ClientController } from '../../../../[utils]/client/client.controller';

export class Client extends ClientController {
    public constructor(){
        super();
        this.createBlips([
            {
                id:477,
                color:44,
                title:'Job - Trucker',
                pos:[-63.10899, -2520.512, 7.399749]
            }
        ]);

        this.createMarkers([
            {
                marker:20,
                pos:[-63.10899, -2520.512, 7.399749],
                scale:1.0,
                rgba:[200, 192, 160, 0.8],
                renderDistance: 35.0,
                underlyingCircle:{
                    marker:27,
                    scale:1.2,
                    rgba:[200,192,160,0.8]
                }
            }
        ])
        this.createActionPoints(
            {
                pos:[-63.10899, -2520.512, 7.399749],
                action: () => {
                    this.createVehicleAsync(GetHashKey('Hauler'),-94.50495,-2527.271,6.002931,325.8896484375,true,true,true);
                },
                once:true
            }
        )
    }
}