import { ClientController } from '../../../../[utils]/client/client.controller';

export class Client extends ClientController {
    public constructor() {
        super();

        this.createBlips([
            {
                id: 513,
                color: 66,
                title: 'Job - Bus Driver',
                pos: [436.0087890625, -644.5582275390625, 28.7237548828125]
            }
        ]);

        this.createMarkers([
            {
                marker: 20,
                pos: [436.0087890625, -644.5582275390625, 28.7237548828125],
                scale: 1.0,
                rgba: [255, 255, 255, 255],
                renderDistance: 35.0,
                underlyingCircle: {
                    marker: 25,
                    scale: 1.75,
                    rgba: [255, 255, 255, 255]
                }
            }
        ]);

        this.createActionPoints(
            {
                pos: [436.0087890625, -644.5582275390625, 28.7237548828125],
                action: () => {
                    this.createVehicleAsync(GetHashKey('PBus'), 393.4021911621094, -660.6329345703125, 28.1171875, 0, true, true, true);
                },
                once: true
            }
        );
    }
}