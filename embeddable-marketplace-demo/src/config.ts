import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "testcore13afw0cmzk7sfk3e5kx04uu5wwcmxz3cnmk46rzvteung9u7wwhzsxkhp7w",
            cw20: "testcore1ll29rd0sk5fan6ungad965jpcrje79ak9dv5shu0f95sxaeyye7qlqawdd",
            name: "painlessExchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
