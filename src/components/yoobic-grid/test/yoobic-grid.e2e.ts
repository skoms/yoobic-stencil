import { newE2EPage } from '@stencil/core/testing';

describe('yoobic-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoobic-grid></yoobic-grid>');

    const element = await page.find('yoobic-grid');
    expect(element).toHaveClass('hydrated');
  });
});
