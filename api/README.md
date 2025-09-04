# Demo FaaS con Vercel

Este proyecto muestra una función serverless que calcula el impuesto (13%) de un monto dado.

## Uso

- Endpoint: `/api/impuesto?monto=100`
- Respuesta JSON:
  ```json
  {
    "monto": 100,
    "impuesto": 13,
    "total": 113
  }
