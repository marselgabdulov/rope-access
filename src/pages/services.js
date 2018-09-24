import React, { Component } from 'react'

import Layout from '../components/layout/layout'

class ServicesPage extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash)
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#')
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0]
        document.querySelector(`#${hash}`).scrollIntoView()
      }
    }
    scrollToAnchor()
    window.onhashchange = scrollToAnchor
  }
  render() {
    return (
      <Layout>
        <div className="container">
          <h1>Наши услуги</h1>
          <div className="col" id="service">
            <h2>Обслуживание остекления</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nemo architecto impedit cumque ratione fuga est repudiandae, vel
              maiores molestiae, minima, sed quam aperiam, consequatur rerum a
              ducimus temporibus nihil ea sint. Recusandae, impedit illo omnis
              ducimus dolor, voluptatem architecto error similique aut
              doloremque sed adipisci blanditiis reprehenderit, doloribus ab!
              Dolorum ea omnis obcaecati eos odit in incidunt voluptatem
              necessitatibus doloribus esse maxime voluptas blanditiis,
              assumenda? Voluptatem facere porro officiis, temporibus quas!
              Fugit provident animi eos corporis perferendis consectetur
              distinctio qui reiciendis non libero minima ducimus vel quas
              labore error, voluptas, sapiente commodi consequatur quae, sit
              voluptatum amet porro. Laborum asperiores ab ea eligendi quas
              minima sed architecto, tempora enim atque incidunt nobis
              voluptatum quae quo eaque blanditiis tenetur, impedit hic
              assumenda provident ad ex fugiat. Fugit ipsa, porro aperiam illum
              aliquid earum quis quod consectetur odio nulla officia at
              obcaecati quasi vitae autem magnam minima distinctio praesentium.
              Modi molestias mollitia, saepe pariatur ratione ipsa, minima iste
              perferendis sapiente voluptas provident eum minus blanditiis vero
              suscipit earum porro velit dolorem harum quasi a ut sequi
              distinctio recusandae! Nam, ducimus, cumque dolor aperiam fugiat
              magni quaerat ratione accusantium, delectus nisi quam. Magni
              praesentium quo autem necessitatibus culpa rem aut explicabo
              aliquid?
            </p>
          </div>
          <div className="col" id="hard">
            <h2>Труднодоступное остекление</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nemo architecto impedit cumque ratione fuga est repudiandae, vel
              maiores molestiae, minima, sed quam aperiam, consequatur rerum a
              ducimus temporibus nihil ea sint. Recusandae, impedit illo omnis
              ducimus dolor, voluptatem architecto error similique aut
              doloremque sed adipisci blanditiis reprehenderit, doloribus ab!
              Dolorum ea omnis obcaecati eos odit in incidunt voluptatem
              necessitatibus doloribus esse maxime voluptas blanditiis,
              assumenda? Voluptatem facere porro officiis, temporibus quas!
              Fugit provident animi eos corporis perferendis consectetur
              distinctio qui reiciendis non libero minima ducimus vel quas
              labore error, voluptas, sapiente commodi consequatur quae, sit
              voluptatum amet porro. Laborum asperiores ab ea eligendi quas
              minima sed architecto, tempora enim atque incidunt nobis
              voluptatum quae quo eaque blanditiis tenetur, impedit hic
              assumenda provident ad ex fugiat. Fugit ipsa, porro aperiam illum
              aliquid earum quis quod consectetur odio nulla officia at
              obcaecati quasi vitae autem magnam minima distinctio praesentium.
              Modi molestias mollitia, saepe pariatur ratione ipsa, minima iste
              perferendis sapiente voluptas provident eum minus blanditiis vero
              suscipit earum porro velit dolorem harum quasi a ut sequi
              distinctio recusandae! Nam, ducimus, cumque dolor aperiam fugiat
              magni quaerat ratione accusantium, delectus nisi quam. Magni
              praesentium quo autem necessitatibus culpa rem aut explicabo
              aliquid?
            </p>
          </div>
          <div className="col" id="vitrail">
            <h2>Витражное остекление</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nemo architecto impedit cumque ratione fuga est repudiandae, vel
              maiores molestiae, minima, sed quam aperiam, consequatur rerum a
              ducimus temporibus nihil ea sint. Recusandae, impedit illo omnis
              ducimus dolor, voluptatem architecto error similique aut
              doloremque sed adipisci blanditiis reprehenderit, doloribus ab!
              Dolorum ea omnis obcaecati eos odit in incidunt voluptatem
              necessitatibus doloribus esse maxime voluptas blanditiis,
              assumenda? Voluptatem facere porro officiis, temporibus quas!
              Fugit provident animi eos corporis perferendis consectetur
              distinctio qui reiciendis non libero minima ducimus vel quas
              labore error, voluptas, sapiente commodi consequatur quae, sit
              voluptatum amet porro. Laborum asperiores ab ea eligendi quas
              minima sed architecto, tempora enim atque incidunt nobis
              voluptatum quae quo eaque blanditiis tenetur, impedit hic
              assumenda provident ad ex fugiat. Fugit ipsa, porro aperiam illum
              aliquid earum quis quod consectetur odio nulla officia at
              obcaecati quasi vitae autem magnam minima distinctio praesentium.
              Modi molestias mollitia, saepe pariatur ratione ipsa, minima iste
              perferendis sapiente voluptas provident eum minus blanditiis vero
              suscipit earum porro velit dolorem harum quasi a ut sequi
              distinctio recusandae! Nam, ducimus, cumque dolor aperiam fugiat
              magni quaerat ratione accusantium, delectus nisi quam. Magni
              praesentium quo autem necessitatibus culpa rem aut explicabo
              aliquid?
            </p>
          </div>
          <div className="col" id="inside">
            <h2>Внутреннее остекление</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nemo architecto impedit cumque ratione fuga est repudiandae, vel
              maiores molestiae, minima, sed quam aperiam, consequatur rerum a
              ducimus temporibus nihil ea sint. Recusandae, impedit illo omnis
              ducimus dolor, voluptatem architecto error similique aut
              doloremque sed adipisci blanditiis reprehenderit, doloribus ab!
              Dolorum ea omnis obcaecati eos odit in incidunt voluptatem
              necessitatibus doloribus esse maxime voluptas blanditiis,
              assumenda? Voluptatem facere porro officiis, temporibus quas!
              Fugit provident animi eos corporis perferendis consectetur
              distinctio qui reiciendis non libero minima ducimus vel quas
              labore error, voluptas, sapiente commodi consequatur quae, sit
              voluptatum amet porro. Laborum asperiores ab ea eligendi quas
              minima sed architecto, tempora enim atque incidunt nobis
              voluptatum quae quo eaque blanditiis tenetur, impedit hic
              assumenda provident ad ex fugiat. Fugit ipsa, porro aperiam illum
              aliquid earum quis quod consectetur odio nulla officia at
              obcaecati quasi vitae autem magnam minima distinctio praesentium.
              Modi molestias mollitia, saepe pariatur ratione ipsa, minima iste
              perferendis sapiente voluptas provident eum minus blanditiis vero
              suscipit earum porro velit dolorem harum quasi a ut sequi
              distinctio recusandae! Nam, ducimus, cumque dolor aperiam fugiat
              magni quaerat ratione accusantium, delectus nisi quam. Magni
              praesentium quo autem necessitatibus culpa rem aut explicabo
              aliquid?
            </p>
          </div>
          <div className="col" id="outside">
            <h2>Внешнее остекление</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nemo architecto impedit cumque ratione fuga est repudiandae, vel
              maiores molestiae, minima, sed quam aperiam, consequatur rerum a
              ducimus temporibus nihil ea sint. Recusandae, impedit illo omnis
              ducimus dolor, voluptatem architecto error similique aut
              doloremque sed adipisci blanditiis reprehenderit, doloribus ab!
              Dolorum ea omnis obcaecati eos odit in incidunt voluptatem
              necessitatibus doloribus esse maxime voluptas blanditiis,
              assumenda? Voluptatem facere porro officiis, temporibus quas!
              Fugit provident animi eos corporis perferendis consectetur
              distinctio qui reiciendis non libero minima ducimus vel quas
              labore error, voluptas, sapiente commodi consequatur quae, sit
              voluptatum amet porro. Laborum asperiores ab ea eligendi quas
              minima sed architecto, tempora enim atque incidunt nobis
              voluptatum quae quo eaque blanditiis tenetur, impedit hic
              assumenda provident ad ex fugiat. Fugit ipsa, porro aperiam illum
              aliquid earum quis quod consectetur odio nulla officia at
              obcaecati quasi vitae autem magnam minima distinctio praesentium.
              Modi molestias mollitia, saepe pariatur ratione ipsa, minima iste
              perferendis sapiente voluptas provident eum minus blanditiis vero
              suscipit earum porro velit dolorem harum quasi a ut sequi
              distinctio recusandae! Nam, ducimus, cumque dolor aperiam fugiat
              magni quaerat ratione accusantium, delectus nisi quam. Magni
              praesentium quo autem necessitatibus culpa rem aut explicabo
              aliquid?
            </p>
          </div>
          <div className="col" id="roof">
            <h2>Кровельное остекление</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              nemo architecto impedit cumque ratione fuga est repudiandae, vel
              maiores molestiae, minima, sed quam aperiam, consequatur rerum a
              ducimus temporibus nihil ea sint. Recusandae, impedit illo omnis
              ducimus dolor, voluptatem architecto error similique aut
              doloremque sed adipisci blanditiis reprehenderit, doloribus ab!
              Dolorum ea omnis obcaecati eos odit in incidunt voluptatem
              necessitatibus doloribus esse maxime voluptas blanditiis,
              assumenda? Voluptatem facere porro officiis, temporibus quas!
              Fugit provident animi eos corporis perferendis consectetur
              distinctio qui reiciendis non libero minima ducimus vel quas
              labore error, voluptas, sapiente commodi consequatur quae, sit
              voluptatum amet porro. Laborum asperiores ab ea eligendi quas
              minima sed architecto, tempora enim atque incidunt nobis
              voluptatum quae quo eaque blanditiis tenetur, impedit hic
              assumenda provident ad ex fugiat. Fugit ipsa, porro aperiam illum
              aliquid earum quis quod consectetur odio nulla officia at
              obcaecati quasi vitae autem magnam minima distinctio praesentium.
              Modi molestias mollitia, saepe pariatur ratione ipsa, minima iste
              perferendis sapiente voluptas provident eum minus blanditiis vero
              suscipit earum porro velit dolorem harum quasi a ut sequi
              distinctio recusandae! Nam, ducimus, cumque dolor aperiam fugiat
              magni quaerat ratione accusantium, delectus nisi quam. Magni
              praesentium quo autem necessitatibus culpa rem aut explicabo
              aliquid?
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ServicesPage
