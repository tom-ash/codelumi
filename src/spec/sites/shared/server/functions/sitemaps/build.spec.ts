import { describe, it } from '@jest/globals';
import buildSitemap from '../../../../../../sites/shared/server/functions/sitemaps/build';

const clientUrl = 'https://mapawynajmu.pl'

const rootLinkGroup = [
    {
      href: '/',
      hrefLang: 'pl',
      priority: '1.0',
      changeFreq: 'daily',
    },
    {
      href: '/en',
      hrefLang: 'en',
      priority: '1.0',
      changeFreq: 'daily',
    },
  ]

describe('buildSitemap', () => {
  it('is delicious', () => {
    expect(buildSitemap({ linkGroups: [rootLinkGroup], clientUrl })).toMatchSnapshot()
  });
})
