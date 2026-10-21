import { useTranslation } from "react-i18next";
import { ArrowUpRight, Bot, LockKeyhole, Sparkles } from "lucide-react";

const items = [
  { key: "xodevault", url: "https://github.com/lcfcnd1/XodeVaultEnv", icon: LockKeyhole, accent: "#d2ff52" },
  { key: "jobfinder", url: "https://github.com/lcfcnd1/JobFinder", icon: Bot, accent: "#a8ff56" },
] as const;

export default function Projects(){
  const {t}=useTranslation();
  return <section id="projects" className="work-section"><div className="work-wrap">
    <header className="work-heading"><div><span><Sparkles size={14}/>{t("projects.subtitle")}</span><h2>{t("projects.heading")} <em>{t("projects.headingHighlight")}</em></h2></div><p>{t("projects.description")}</p></header>
    <div className="work-grid">{items.map(({ key, url, icon: Icon, accent }, i) => <a href={url} target="_blank" rel="noreferrer" className="work-card" key={key}>
      <header><span>0{i + 1}</span><b>{t("projects.viewCode")} <ArrowUpRight size={15}/></b></header>
      <section><i style={{background:accent}}><Icon size={18}/></i><div><h3>{t(`projects.items.${key}.title`)}</h3><p>{t(`projects.items.${key}.description`)}</p></div></section>
      <footer>{t(`projects.items.${key}.stack`).split(" • ").map((stack) => <span key={stack}>{stack}</span>)}</footer>
    </a>)}</div>
  </div></section>
}
