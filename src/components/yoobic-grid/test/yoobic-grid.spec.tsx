import { newSpecPage } from '@stencil/core/testing';
import { YoobicGrid } from '../yoobic-grid';

describe('yoobic-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YoobicGrid],
      html: `<yoobic-grid></yoobic-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <yoobic-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoobic-grid>
    `);
  });
});
