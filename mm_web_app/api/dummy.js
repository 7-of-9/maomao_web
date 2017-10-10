const express = require('express')
const router = express.Router()

router.get('/disc/url/:urlid', (req, res) => {
  res.json(
    {
      disc_url_id: 1233361,
      url: 'https://www.rspb.org.uk/reserves-and-events/find-a-reserve/reserves-a-z/',
      title: 'Nature Reserves & Events | RSPB Nature Reserve UK A-Z - The RSPB',
      desc: 'Reserves & events. Our reserves are wonderful places to get closer to the natural world. As well as beautiful birds, you\'ll find fascinating flowers, graceful deer, ...',
      utc: '2017-09-05T16:04:51.16',
      img: 'https://www.rspb.org.uk/Images/oglogo_tcm9-283522.gif',
      main_term_name: 'Nature',
      main_term_id: 4990960,
      main_term_related_topics_term_ids:
      [
        4992730,
        4994101
      ],
      main_term_related_suggestions_term_ids:
      [
        4993973,
        5043839,
        4992233
      ],
      sub_term_name: 'Nature',
      sub_term_id: 4990960,
      sub_term_related_topics_term_ids:
      [
        4992730,
        4994101
      ],
      sub_term_related_suggestions_term_ids:
      [
        4993973,
        5043839,
        4992233
      ],
      search_num: 8,
      suggested_topic: false,
      result_num: 8,
      term_num: 0,
      city: 'London',
      country: 'UK',
      site_tld: 'www.rspb.org.uk',
      site_img: 'https://maomao.blob.core.windows.net/s-img/s_18315_rspb-org-uk_M1.jpeg',
      cwc: [],
      osl: []
    }
  )
})

module.exports = router
