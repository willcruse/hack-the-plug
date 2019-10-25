import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about'
import QA from "../components/qa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="About">
        <h1>About Hack the Plug</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet tellus est, in cursus elit posuere et. Nunc dui nunc, viverra in magna at, vulputate euismod ex. Morbi cursus interdum dolor in elementum. Pellentesque tincidunt est erat, pellentesque euismod est tempus ut. Sed auctor elit euismod, facilisis sapien tempor, aliquet turpis. Praesent consectetur nibh sit amet erat tincidunt, ac varius erat pulvinar. Aenean ut justo egestas, sollicitudin nisi ut, dapibus arcu. Nunc fermentum imperdiet placerat. Vivamus maximus ligula risus, nec lacinia ex rutrum sed. Donec auctor, tortor at vehicula vehicula, orci mi vulputate mauris, non vestibulum tortor leo ac lectus. In eu malesuada erat, in posuere erat. Vivamus dignissim volutpat ornare.

            Donec et aliquet mi, ac commodo nunc. Phasellus in libero eget turpis dignissim maximus. Sed sed tempus massa. Ut auctor nisl sit amet ante imperdiet, faucibus viverra elit scelerisque. Sed sit amet cursus urna. Sed ante turpis, laoreet sit amet libero et, venenatis dignissim neque. Pellentesque luctus bibendum lacus, tincidunt ultricies orci. Vestibulum in pretium sem. Nulla facilisi. Aenean elit massa, consectetur id lobortis a, condimentum mollis sem. Morbi vehicula elementum turpis, nec egestas nisl ornare vitae. Nullam rhoncus purus id odio maximus iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
    </div>
    <div id="FAQs">
      <h1>FAQs</h1>
      <QA question="Will you provide travel reimbusment?" ans="We aim to allocate travel up to £50 for those inside the UK and up to £300 for those outside the UK" />
      <QA question="How much does Hack the Plug cost to attend?" ans="Hack the Plug is completly free to attend!" />
    </div>
  </Layout>
)

export default IndexPage
