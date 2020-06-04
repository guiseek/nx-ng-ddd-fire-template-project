import { registerLocaleData } from '@angular/common';

export const importLocaleData = async (
  lang = 'pt',
  extra = 'br'
) => {
  const locale = await import(`@angular/common/locales/${lang}`);
  const culture = await import(`@angular/common/locales/extra/${extra}`);
  const localeId = `${lang}-${extra.toUpperCase()}`;
  registerLocaleData(locale, localeId, culture);
  return Promise.resolve();
}