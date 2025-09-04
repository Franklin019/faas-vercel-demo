export default function handler(req, res) {
  const monto = parseFloat(req.query.monto || 0);
  const impuesto = monto * 0.13;
  res.status(200).json({
    monto,
    impuesto,
    total: monto + impuesto
  });
}
