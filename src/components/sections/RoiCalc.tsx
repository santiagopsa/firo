"use client";

import { useMemo, useState } from "react";
import Container from "../ui/Container";

type RoiCalcProps = {
  locale?: "en" | "es";
};

export default function RoiCalc({ locale = "en" }: RoiCalcProps) {
  const isEs = locale === "es";
  const contractMonths = 24;
  const hardCommitMonths = 12;
  const reserveMonths = 2;
  const [days, setDays] = useState(10);
  const [rate, setRate] = useState(650);
  const [operatorDay, setOperatorDay] = useState(220);
  const [otherOps, setOtherOps] = useState(0.12);
  const [leaseMonthly, setLeaseMonthly] = useState(1500);
  const investorShare = 0.7;

  const result = useMemo(() => {
    const gross = days * rate;
    const operator = days * operatorDay;
    const other = gross * otherOps;
    const operatingNet = gross - operator - other;
    const distributable = operatingNet - leaseMonthly;
    const investor = Math.max(0, distributable * investorShare);
    const firoFee = Math.max(0, distributable - investor);
    const leaseCoverage = leaseMonthly > 0 ? operatingNet / leaseMonthly : 0;
    const reserveRequired = leaseMonthly * reserveMonths;
    const investorTermTotal = investor * contractMonths;
    return { gross, operator, other, operatingNet, distributable, investor, firoFee, leaseCoverage, reserveRequired, investorTermTotal };
  }, [days, rate, operatorDay, otherOps, leaseMonthly]);

  const scenarios = useMemo(
    () => [
      { name: isEs ? "Conservador" : "Conservative", days: 8, rate: 500, operatorDay: 220, otherOps: 0.12, leaseMonthly: 1500 },
      { name: isEs ? "Base" : "Base", days: 10, rate: 650, operatorDay: 220, otherOps: 0.12, leaseMonthly: 1500 },
      { name: isEs ? "Optimista" : "Upside", days: 12, rate: 800, operatorDay: 240, otherOps: 0.1, leaseMonthly: 2500 },
    ],
    [isEs]
  );

  return (
    <section id="roi" className="bg-white py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-firo-blue">{isEs ? "Simulador ROI" : "ROI simulator"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Modela tu retorno con supuestos visibles." : "Model your return with visible assumptions."}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Formula leasing: Bruto = dias x tarifa diaria. Neto operativo = Bruto - operador - otros ops. Distribuible = Neto operativo - leasing mensual. El inversionista recibe 70% del distribuible. Contrato minimo: 24 meses."
                : "Leasing formula: Gross = days x day rate. Operating net = Gross - operator - other ops. Distributable = Operating net - monthly lease. Investor receives 70% of distributable. Minimum term: 24 months."}
            </p>

            <div className="mt-8 space-y-6 rounded-2xl border border-firo-line bg-firo-bg p-6">
              <Slider label={isEs ? "Dias en uso por mes" : "Days per month in use"} value={days} min={4} max={24} onChange={setDays} />
              <Slider label={isEs ? "Tarifa por dia al cliente (USD)" : "Client rate per day (USD)"} value={rate} min={300} max={1500} onChange={setRate} />
              <Slider
                label={isEs ? "Costo operador por dia activo (USD)" : "Operator cost per active day (USD)"}
                value={operatorDay}
                min={120}
                max={400}
                onChange={setOperatorDay}
              />
              <Slider
                label={isEs ? "Otros ops (porcentaje del bruto)" : "Other ops (percent of gross)"}
                value={Math.round(otherOps * 100)}
                min={5}
                max={30}
                onChange={(v) => setOtherOps(v / 100)}
                suffix="%"
              />
              <Slider
                label={isEs ? "Leasing mensual (USD)" : "Monthly lease payment (USD)"}
                value={leaseMonthly}
                min={600}
                max={4000}
                onChange={setLeaseMonthly}
              />
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {scenarios.map((s) => {
                const gross = s.days * s.rate;
                const operator = s.days * s.operatorDay;
                const other = gross * s.otherOps;
                const operatingNet = gross - operator - other;
                const distributable = operatingNet - s.leaseMonthly;
                const investor = Math.max(0, distributable * investorShare);
                return (
                  <div key={s.name} className="rounded-2xl border border-firo-line bg-white p-4">
                    <div className="text-xs font-semibold text-firo-muted">{s.name}</div>
                    <div className="mt-1 text-lg font-semibold">${Math.round(investor).toLocaleString()}</div>
                    <div className="mt-1 text-xs text-firo-muted">
                      {isEs
                        ? `Neto inversionista con ${s.days}d x $${s.rate}/d y leasing $${s.leaseMonthly}`
                        : `Investor net at ${s.days}d x $${s.rate}/d with $${s.leaseMonthly} lease`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl bg-firo-navy p-8 text-white shadow-soft">
            <div className="text-sm text-white/60">{isEs ? "Neto mensual estimado para inversionista" : "Estimated investor pocketed monthly"}</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight">
              ${Math.round(result.investor).toLocaleString()}
            </div>
            <div className="mt-2 text-white/60">
              {isEs
                ? `Bruto: $${Math.round(result.gross).toLocaleString()} • Operador: $${Math.round(result.operator).toLocaleString()} • Otros ops: $${Math.round(result.other).toLocaleString()} • Neto operativo: $${Math.round(result.operatingNet).toLocaleString()}`
                : `Gross: $${Math.round(result.gross).toLocaleString()} • Operator: $${Math.round(result.operator).toLocaleString()} • Other ops: $${Math.round(result.other).toLocaleString()} • Operating net: $${Math.round(result.operatingNet).toLocaleString()}`}
            </div>
            <div className="mt-1 text-white/60">
              {isEs
                ? `Leasing mensual: $${Math.round(leaseMonthly).toLocaleString()} • Distribuible: $${Math.round(result.distributable).toLocaleString()}`
                : `Monthly lease: $${Math.round(leaseMonthly).toLocaleString()} • Distributable: $${Math.round(result.distributable).toLocaleString()}`}
            </div>
            <div className="mt-1 text-white/60">
              {isEs
                ? `Pago inversionista (70%): $${Math.round(result.investor).toLocaleString()} • Fee FIRO (30%): $${Math.round(result.firoFee).toLocaleString()}`
                : `Investor payout (70%): $${Math.round(result.investor).toLocaleString()} • FIRO fee (30%): $${Math.round(result.firoFee).toLocaleString()}`}
            </div>
            <div className="mt-1 text-white/60">
              {isEs
                ? `Cobertura leasing: ${result.leaseCoverage.toFixed(2)}x (neto operativo / leasing)`
                : `Lease coverage: ${result.leaseCoverage.toFixed(2)}x (operating net / lease)`}
            </div>
            <div className="mt-1 text-white/60">
              {isEs
                ? `Contrato minimo: ${contractMonths} meses • Permanencia dura: ${hardCommitMonths} meses`
                : `Minimum contract: ${contractMonths} months • Hard commitment: ${hardCommitMonths} months`}
            </div>
            <div className="mt-1 text-white/60">
              {isEs
                ? `Reserva operativa sugerida (${reserveMonths} meses): $${Math.round(result.reserveRequired).toLocaleString()}`
                : `Suggested operating reserve (${reserveMonths} months): $${Math.round(result.reserveRequired).toLocaleString()}`}
            </div>
            <div className="mt-1 text-white/60">
              {isEs
                ? `Neto proyectado al inversionista en ${contractMonths} meses: $${Math.round(result.investorTermTotal).toLocaleString()}`
                : `Projected investor net over ${contractMonths} months: $${Math.round(result.investorTermTotal).toLocaleString()}`}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Info
                title={isEs ? "Motor de utilizacion" : "Utilization driver"}
                desc={isEs ? "Eventos, activaciones de marca y contratos con recintos." : "Events, brand activations, venue contracts."}
              />
              <Info
                title={isEs ? "Operaciones incluidas" : "Operations included"}
                desc={isEs ? "Operador dedicado, agenda y flujos de mantenimiento." : "Dedicated operator, scheduling, maintenance workflows."}
              />
              <Info
                title={isEs ? "Controles de riesgo" : "Risk controls"}
                desc={isEs ? "Geocercas, operacion supervisada y politicas de privacidad." : "Geofencing, supervised ops, privacy policy."}
              />
              <Info
                title={isEs ? "Visibilidad de pagos" : "Payout visibility"}
                desc={isEs ? "Dashboard del inversionista con logs y reportes mensuales." : "Investor dashboard with logs + monthly statements."}
              />
            </div>

            <a
              id="quote"
              href="#join"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold hover:opacity-95"
            >
              {isEs ? "Agendar llamada para inversionistas" : "Book investor call"}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-firo-muted">
          {value}{suffix ?? ""}
        </span>
      </div>
      <input
        className="mt-2 w-full"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Info({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/65">{desc}</div>
    </div>
  );
}
