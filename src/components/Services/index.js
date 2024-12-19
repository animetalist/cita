import React from 'react'
import { useTranslations } from 'next-intl'
import s from './Services.module.scss'

const Services = () => {
  const t = useTranslations('Services')

  const list = t.raw('list')

  return (
    <section id="services">
      <div className={'container'}>
        <div className={s.services}>
          <h2 className={s.services_heading}>{t('title')}</h2>

          <div className={s.services_list}>
            {list.map(({ title, descr }, i) => (
              <div key={i} className={s.services_item}>
                <div className={s.services_title}>{title}</div>
                <div className={s.services_descr}>
                  <ul>
                    {descr.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
