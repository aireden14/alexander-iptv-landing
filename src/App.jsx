import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const phoneDisplay = '+7 707 218 60 14'
const phoneHref = 'tel:+77072186014'
const whatsappHref =
  'https://wa.me/77072186014?text=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%2C%20%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C%20IPTV%20%D0%BD%D0%B0%20%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%B5.'

const makeWhatsappHref = (text) => `https://wa.me/77072186014?text=${encodeURIComponent(text)}`

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
}

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`section ${className}`}>
    {children}
  </section>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6.04 6.04l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.94-.92L3 20l1.33-4.36A8.35 8.35 0 0 1 3 11.5a8.5 8.5 0 0 1 18 0Z" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const TvHero = () => (
  <motion.div
    className="tv-scene"
    initial={{ opacity: 0, y: 34, rotateX: 8 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
  >
    <div className="tv-frame">
      <div className="tv-screen">
        <div className="screen-top">
          <span>IPTV подключено</span>
          <span>4K</span>
        </div>
        <div className="screen-grid">
          <div className="tile tile-large">
            <span>Футбол</span>
            <strong>Прямой эфир</strong>
          </div>
          <div className="tile tile-cyan">
            <span>Кино</span>
            <strong>HD</strong>
          </div>
          <div className="tile tile-green">
            <span>Детям</span>
            <strong>Мультфильмы</strong>
          </div>
          <div className="tile tile-coral">
            <span>Архив</span>
            <strong>4 дня</strong>
          </div>
          <div className="tile tile-dark">
            <span>Спорт</span>
            <strong>300+</strong>
          </div>
        </div>
      </div>
      <div className="tv-stand" />
    </div>
    <div className="remote">
      <span />
      <span />
      <span />
    </div>
  </motion.div>
)

const Nav = () => (
  <motion.header
    className="topbar"
    initial={{ opacity: 0, y: -18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <a className="brand" href="#top" aria-label="Наверх">
      <span className="brand-mark">A</span>
      <span>Александр IPTV</span>
    </a>
    <nav className="desktop-nav" aria-label="Основная навигация">
      <a href="#benefits">Плюсы</a>
      <a href="#devices">Устройства</a>
      <a href="#faq">Вопросы</a>
    </nav>
    <a className="nav-call" href={phoneHref}>
      <PhoneIcon />
      <span>{phoneDisplay}</span>
    </a>
  </motion.header>
)

const Hero = () => (
  <section id="top" className="hero">
    <div className="hero-bg" />
    <div className="hero-content">
      <div className="hero-copy">
        <p className="eyebrow">Астана и Казахстан. Удаленная настройка</p>
        <h1>
          IPTV на
          <span>Smart TV</span>
          <span>за 15–30 минут</span>
        </h1>
        <p className="lead">
          Привет, я Александр. Более 10 лет занимаюсь настройкой ТВ и помогу настроить ваш
          телевизор для просмотра интересующих каналов: спорт, кино, детские, архив передач и
          медиатека. Работаю с Samsung, LG, Sony, Android TV и TV Box. Оплата после установки.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={whatsappHref}>
            <MessageIcon />
            Написать в WhatsApp
          </a>
          <a className="btn btn-glass" href={phoneHref}>
            <PhoneIcon />
            Позвонить
          </a>
        </div>
        <div className="quick-trust">
          <span>от 5000 тг</span>
          <span>без предоплаты</span>
          <span>нужен только интернет</span>
        </div>
      </div>
      <TvHero />
    </div>
  </section>
)

const sellingPoints = [
  ['Быстро', 'Настройка обычно занимает 15–30 минут, без долгих ожиданий мастера.'],
  ['Удаленно', 'Можно подключить телевизор или приставку в любой точке Казахстана.'],
  ['Понятно', 'Александр подскажет, что нажать, и проверит работу каналов после установки.'],
  ['Честно', 'Стоимость от 5000 тг. Оплата после того, как приложение заработало.'],
]

const Benefits = () => (
  <Section id="benefits" className="benefits">
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <p className="eyebrow">Почему удобно</p>
      <h2>Каналы, кино и спорт без сложной техники</h2>
      <p>
        Не нужно покупать новое оборудование, если у вас Smart TV. Для обычного телевизора подойдет
        Android TV Box.
      </p>
    </motion.div>
    <div className="benefit-grid">
      {sellingPoints.map(([title, text], index) => (
        <motion.article
          className="glass-card"
          key={title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={index}
        >
          <div className="check-badge">
            <CheckIcon />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </motion.article>
      ))}
    </div>
  </Section>
)

const stats = [
  ['2000+', 'каналов'],
  ['300+', 'спортивных каналов'],
  ['4 дня', 'архив передач'],
  ['4K', 'HD/FHD/4K качество'],
]

const Offer = () => (
  <Section id="offer" className="offer">
    <div className="offer-panel">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="offer-text"
      >
        <p className="eyebrow">Что получаете</p>
        <h2>Телевизор становится домашним кинотеатром</h2>
        <p>
          Каналы СНГ и зарубежные, спорт, футбол, мультфильмы, фильмы и медиатека. Настройка
          подбирается под вашу модель телевизора и скорость интернета.
        </p>
        <a className="text-link" href={whatsappHref}>
          Узнать, подойдет ли мой телевизор
          <ArrowIcon />
        </a>
      </motion.div>
      <div className="stat-grid">
        {stats.map(([value, label], index) => (
          <motion.div
            className="stat"
            key={label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={index}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

const quizQuestions = [
  {
    key: 'device',
    title: 'На чем хотите смотреть IPTV?',
    options: ['Smart TV', 'Android TV / TV Box', 'Обычный ТВ с приставкой', 'Пока не знаю'],
  },
  {
    key: 'brand',
    title: 'Какая марка устройства?',
    options: ['Samsung', 'LG', 'Sony', 'Xiaomi / Mi Box', 'Другая'],
  },
  {
    key: 'internet',
    title: 'Интернет дома стабильный?',
    options: ['Да, Wi-Fi нормальный', 'Иногда тормозит', 'Подключен кабелем', 'Не знаю'],
  },
  {
    key: 'when',
    title: 'Когда удобно настроить?',
    options: ['Сегодня', 'Завтра', 'В ближайшие дни', 'Сначала хочу уточнить'],
  },
]

const Quiz = () => {
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState({
    device: '',
    brand: '',
    internet: '',
    when: '',
    model: '',
    city: '',
  })

  const completedCount = quizQuestions.filter((question) => answers[question.key]).length
  const progress = Math.round((completedCount / quizQuestions.length) * 100)

  const message = useMemo(
    () =>
      [
        'Александр, здравствуйте. Хочу настроить IPTV.',
        '',
        `Устройство: ${answers.device || 'не указано'}`,
        `Марка: ${answers.brand || 'не указано'}`,
        `Модель: ${answers.model || 'не указана'}`,
        `Город: ${answers.city || 'не указан'}`,
        `Интернет: ${answers.internet || 'не указано'}`,
        `Когда удобно: ${answers.when || 'не указано'}`,
      ].join('\n'),
    [answers],
  )

  const setAnswer = (key, value) => {
    setAnswers((current) => ({ ...current, [key]: value }))
  }

  return (
    <Section id="quiz" className="quiz-section">
      <motion.div
        className={started ? 'quiz-panel quiz-panel-active' : 'quiz-panel'}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {!started ? (
          <div className="quiz-start">
            <div className="quiz-start-copy">
              <p className="eyebrow">Квиз перед заявкой</p>
              <h2>Проверьте ваш телевизор за 30 секунд</h2>
              <p>
                Ответьте на 4 коротких вопроса. В WhatsApp Александру уйдет уже готовая заявка с
                моделью, городом и удобным временем.
              </p>
              <button className="btn btn-primary quiz-start-button" type="button" onClick={() => setStarted(true)}>
                Начать квиз
                <ArrowIcon />
              </button>
            </div>
            <div className="quiz-preview" aria-hidden="true">
              <div className="quiz-preview-card active">
                <span>1</span>
                <strong>Устройство</strong>
                <em>Smart TV / TV Box</em>
              </div>
              <div className="quiz-preview-card">
                <span>2</span>
                <strong>Марка</strong>
                <em>Samsung, LG, Sony...</em>
              </div>
              <div className="quiz-preview-card">
                <span>3</span>
                <strong>Интернет</strong>
                <em>Wi-Fi или кабель</em>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="quiz-head">
              <div>
                <p className="eyebrow">Быстрый квиз</p>
                <h2>Узнайте, подойдет ли ваше устройство</h2>
                <p>
                  Нажмите подходящие варианты. В конце откроется WhatsApp с готовым сообщением для
                  Александра.
                </p>
              </div>
              <div className="quiz-progress-wrap">
                <span>{completedCount} из {quizQuestions.length}</span>
                <div className="quiz-progress" aria-label={`Заполнено ${progress}%`}>
                  <span style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>

            <div className="quiz-grid">
              {quizQuestions.map((question, index) => (
                <div className="quiz-card" key={question.key}>
                  <div className="quiz-question-title">
                    <span>{index + 1}</span>
                    <h3>{question.title}</h3>
                  </div>
                  <div className="quiz-options">
                    {question.options.map((option) => (
                      <button
                        className={
                          answers[question.key] === option ? 'quiz-option active' : 'quiz-option'
                        }
                        key={option}
                        type="button"
                        onClick={() => setAnswer(question.key, option)}
                      >
                        <CheckIcon />
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="quiz-fields">
              <label>
                <span>Модель, если знаете</span>
                <input
                  value={answers.model}
                  onChange={(event) => setAnswer('model', event.target.value)}
                  placeholder="Например: Samsung TU7000"
                />
              </label>
              <label>
                <span>Город</span>
                <input
                  value={answers.city}
                  onChange={(event) => setAnswer('city', event.target.value)}
                  placeholder="Например: Астана"
                />
              </label>
            </div>

            <div className="quiz-result">
              <div>
                <strong>Готовое сообщение</strong>
                <p>Перед отправкой его можно будет поправить прямо в WhatsApp.</p>
              </div>
              <a className="btn btn-primary" href={makeWhatsappHref(message)}>
                <MessageIcon />
                Отправить квиз в WhatsApp
              </a>
            </div>
          </>
        )}
      </motion.div>
    </Section>
  )
}

const devices = [
  'Samsung Smart TV',
  'LG Smart TV',
  'Sony Smart TV',
  'Android TV',
  'Mi Box и TV Box',
  'Приставки для обычных ТВ',
]

const Devices = () => (
  <Section id="devices" className="devices">
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <p className="eyebrow">Совместимость</p>
      <h2>Подходит большинству Smart TV и приставок</h2>
      <p>Если модель нестандартная, Александр заранее проверит возможный способ подключения.</p>
    </motion.div>
    <div className="device-list">
      {devices.map((device, index) => (
        <motion.div
          className="device-pill"
          key={device}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={index}
        >
          <CheckIcon />
          {device}
        </motion.div>
      ))}
    </div>
  </Section>
)

const steps = [
  ['Пишите или звоните', 'Сообщите модель телевизора или приставки и город.'],
  ['Готовите телевизор', 'Нужен Smart TV или TV Box, интернет и доступ к магазину приложений.'],
  ['Идет настройка', 'Александр устанавливает приложение и проверяет каналы.'],
  ['Оплачиваете', 'Оплата после результата, когда все открывается и работает.'],
]

const Process = () => (
  <Section id="process" className="process">
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <p className="eyebrow">Как проходит</p>
      <h2>Просто, даже если вы не разбираетесь в настройках</h2>
    </motion.div>
    <div className="timeline">
      {steps.map(([title, text], index) => (
        <motion.article
          className="step"
          key={title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={index}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
)

const faq = [
  [
    'Можно настроить удаленно?',
    'Да. В большинстве случаев настройка проходит на расстоянии по WhatsApp или телефону. Александр подсказывает каждый шаг.',
  ],
  [
    'Сколько стоит?',
    'Стоимость услуги от 5000 тг. Точную цену лучше уточнить по модели устройства и желаемому способу подключения.',
  ],
  [
    'Что нужно для установки?',
    'Телевизор Smart TV или TV Box, стабильный интернет и возможность установить приложение. Для обычного телевизора нужна приставка.',
  ],
  [
    'Есть ли гарантия результата?',
    'Оплата после установки. Сначала проверяется запуск приложения, качество картинки и работа каналов.',
  ],
]

const FAQ = () => (
  <Section id="faq" className="faq">
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <p className="eyebrow">Вопросы</p>
      <h2>Перед заявкой</h2>
    </motion.div>
    <div className="faq-list">
      {faq.map(([question, answer], index) => (
        <motion.details
          className="faq-item"
          key={question}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={index}
        >
          <summary>{question}</summary>
          <p>{answer}</p>
        </motion.details>
      ))}
    </div>
  </Section>
)

const CTA = () => (
  <Section id="contacts" className="cta-section">
    <motion.div
      className="cta-panel"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <p className="eyebrow">Заявка</p>
      <h2>Напишите Александру сейчас</h2>
      <p>
        Отправьте модель телевизора или приставки. Если не знаете модель, просто сфотографируйте
        экран с настройками или напишите бренд.
      </p>
      <div className="cta-actions">
        <a className="btn btn-primary" href={whatsappHref}>
          <MessageIcon />
          WhatsApp
        </a>
        <a className="btn btn-glass" href={phoneHref}>
          <PhoneIcon />
          {phoneDisplay}
        </a>
      </div>
    </motion.div>
  </Section>
)

const StickyMobile = () => (
  <div className="sticky-mobile" aria-label="Быстрые контакты">
    <a href={phoneHref}>
      <PhoneIcon />
      Звонок
    </a>
    <a href={whatsappHref}>
      <MessageIcon />
      WhatsApp
    </a>
  </div>
)

const Footer = () => (
  <footer className="footer">
    <div>
      <strong>Александр IPTV</strong>
      <span>Настройка Smart TV, Android TV и TV Box по Казахстану</span>
    </div>
    <a href={phoneHref}>{phoneDisplay}</a>
  </footer>
)

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Offer />
        <Quiz />
        <Devices />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyMobile />
    </>
  )
}
