const STEPS = [
  { n: "1", title: "Je cherche", text: "Décrivez ce que vous voulez." },
  { n: "2", title: "CovaSell vous conseille", text: "Il trouve les produits correspondants." },
  { n: "3", title: "Je commande", text: "Choisissez votre moyen de paiement et faites-vous livrer." },
];

export function HowItWorks() {
  return (
    <section className="mt-2">
      <h2 className="mb-3 font-display text-base font-semibold text-ink-900">Comment ça marche ?</h2>
      <div className="flex flex-col gap-2.5">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="flex items-start gap-3 rounded-sig-sm border border-border bg-surface p-3"
          >
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-sig-sm bg-teal-100 text-[13px] font-bold text-teal-700">
              {step.n}
            </span>
            <div>
              <p className="text-[13px] font-semibold text-ink-900">{step.title}</p>
              <p className="text-[12.5px] text-ink-600">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
