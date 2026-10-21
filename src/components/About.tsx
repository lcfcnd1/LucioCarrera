import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div>
            <span className="font-mono text-primary text-sm tracking-wider">// {t('about.subtitle')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              {t('about.heading')} 
              <span className="text-gradient"> {t('about.headingHighlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t('about.description')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
