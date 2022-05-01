exports.handler = async (event) => {
    let json_data = [
      {
        "product": "Coca-Cola Sabor Original 2,25 Lts.",
        "date": "2022-04-29",
        "coto": 265.0,
        "carrefour": 0,
        "dia": 249.0,
        "jumbo": 266.0,
        "mass": 265.0
      },
      {
        "product": "Pepsi Black 2.25lts",
        "date": "2022-04-29",
        "coto": 289.9,
        "carrefour": 0,
        "dia": 278.6,
        "jumbo": 302.0,
        "mass": 289.9
      },
      {
        "product": "Arroz parboil Gallo Oro caja 1 kg",
        "date": "2022-04-29",
        "coto": 163.8,
        "carrefour": 0,
        "dia": 163.8,
        "jumbo": 163.8,
        "mass": 163.8
      }
    ]

    const response = {
        statusCode: 200,
        body: JSON.stringify(json_data),
        "isBase64Encoded": false
    };

    return response;
};

