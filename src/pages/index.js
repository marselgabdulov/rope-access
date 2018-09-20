import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layout/layout'
import { Section } from '../components/Section'
import { Typewriter } from '../components/Typewriter'

const IndexPage = () => (
  <Layout>
    <div className="main">
      <Section>
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">
            ООО &laquo;Высотник&raquo;
            <br />
            Высотные работы
            <br />
            <span className="title-desc"> Москва и область</span>
            {/* <Typewriter
              className="title-desc"
              texts={['Остекление.', 'Установка.', 'Покраска.', 'Мойка.']}
            /> */}
          </h1>
        </div>
        <div className="grid">
          <div className="col md-9 lg-8 md-push-1 lg-push-2 lg-push-3">
            <p className="measure">
              Мы занимаемся всеми видами высотных работ.
            </p>
            <p className="measure">Предоставляем гарантию от 2-х лет.</p>
            <p>
              <Link to="/about" className="button">
                подробнее о нас
              </Link>
            </p>
          </div>

          {/* <div className="col md-3 lg-2">
            <p className="small faded footnote -yellow" data-id="&#9679;">
              Guava jam is made with guava, a tropical fruit that’s sweet and
              aromatic. It’s the most popular dip for Pão de Queijo. You can use
              your favourite english jam as a substitute.
            </p>
          </div> */}
        </div>
      </Section>
    </div>
  </Layout>
)

export default IndexPage
