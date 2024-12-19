import React from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import * as Accordion from '@radix-ui/react-accordion'
import s from './FAQ.module.scss'

const FAQ = () => {
  const t = useTranslations('FAQ')

  const list = t.raw('list')

  return (
    <section id="faq" className={clsx('container', s.faq)}>
      <h2>{t('title')}</h2>

      <Accordion.Root type="single" collapsible className={s.faq_list}>
        {list.map((item, index) => (
          <Accordion.Item
            key={index}
            value={'a' + index}
            className={s.faq_item}
          >
            <Accordion.Trigger className={s.faq_title}>
              {item.q}
            </Accordion.Trigger>
            <Accordion.Content className={s.faq_content}>
              <p className={s.faq_text}>{item.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}

export default FAQ
