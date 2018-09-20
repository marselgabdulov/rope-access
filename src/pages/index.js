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
            Высотные работы.
            <br />
            <span>В Москве и области.</span>
            <Typewriter
              className="title-desc"
              texts={[
                'Остекление.',
                'Установка.',
                'Малярные работы.',
                'Мойка.',
              ]}
            />
          </h1>
        </div>
        <div className="grid">
          <div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
            <p className="measure">
              A proper Pão de Queijo is a two-bite business: crunchy on the
              outside and fluffy on the inside. Made with cassava flour and
              fresh cheese, it’s a farmer’s take on traditional European bread -
              without the wheat. Pão de Queijo is a staple snack at most cafes,
              restaurants and dinner parties across Brazil. It’s cheesily
              addictive and naturally gluten free.
            </p>
            <p className="measure">
              Try pairing it with a short black coffee São Paulo style, or
              spread thickly with guava
              <sup className="-yellow">&#9679;</sup> jam for a sweet contrast.
            </p>

            <p>
              <Link to="/story" className="button">
                Read our story
              </Link>
            </p>
          </div>

          <div className="col md-3 lg-2">
            <p className="small faded footnote -yellow" data-id="&#9679;">
              Guava jam is made with guava, a tropical fruit that’s sweet and
              aromatic. It’s the most popular dip for Pão de Queijo. You can use
              your favourite english jam as a substitute.
            </p>
          </div>
        </div>
      </Section>
    </div>
  </Layout>
)

export default IndexPage
