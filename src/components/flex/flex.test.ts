import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-flex>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-flex></sl-flex> `);

    expect(el).to.exist;
  });
});
