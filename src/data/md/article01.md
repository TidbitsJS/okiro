Duis fringilla ornare enim, et vestibulum magna rutrum non. Nunc tempor accumsan ante, quis tristique elit. Integer hendrerit magna eu cursus mollis. Donec lacinia magna ut posuere convallis. Nulla auctor tellus vel mauris consectetur sodales.

## Morbi Dignissim

Phasellus malesuada eget erat in tincidunt. Integer sagittis auctor turpis, sed porttitor eros efficitur in. Nulla aliquet nibh vitae leo tristique cursus. Aliquam sagittis aliquam lectus eget faucibus. In hac habitasse platea dictumst. Cras tempus fringilla turpis nec hendrerit. Suspendisse malesuada neque ut elit blandit ullamcorper.

> Integer ornare arcu enim, eu porta sem tristique eu. Ut varius, ipsum ut sollicitudin > fringilla, diam nisl venenatis neque, vitae suscipit purus erat scelerisque diam.

Nunc vel lectus ornare, rhoncus enim interdum, tristique lectus. Donec auctor sapien arcu, aliquam hendrerit mauris feugiat a. Vestibulum feugiat commodo venenatis. Phasellus accumsan dui sed magna ultrices finibus. Pellentesque auctor libero dui. Praesent faucibus elit id pulvinar egestas. In hac habitasse platea dictumst. Sed mattis neque ut condimentum vestibulum. Ut ornare enim ex, eget scelerisque nunc accumsan eget. Cras eleifend ullamcorper nunc aliquet dapibus.

. . .

Proin hendrerit commodo diam, nec pharetra lacus commodo eget. Mauris semper nisl sed urna iaculis, vel efficitur libero elementum. Pellentesque bibendum posuere nunc, et ultrices ex consequat ac. Nulla ultrices, risus in accumsan rutrum, nisl velit ornare mauris, a venenatis mauris dui venenatis quam. In eros eros, eleifend at sem ac, porta faucibus enim.

## Why this one?

There are other ways for markdown in React out there so why use this one?
The two main reasons are that they often rely on `dangerouslySetInnerHTML` or
have bugs with how they handle markdown.
`react-markdown` uses a syntax tree to build the virtual dom which allows for
updating only the changing DOM instead of completely overwriting.
`react-markdown` is 100% CommonMark (optionally GFM) compliant and has
extensions to support custom syntax.

## API

Nunc vel lectus ornare, rhoncus enim interdum, tristique lectus. Donec auctor sapien arcu, aliquam hendrerit mauris feugiat a. Vestibulum feugiat commodo venenatis.

- `children` (`string`, default: `''`)\
  Markdown to parse
- `className` (`string?`)\
  Wrap the markdown in a `div` with this class name
- `skipHtml` (`boolean`, default: `false`)\
  Ignore HTML in Markdown completely
- `sourcePos` (`boolean`, default: `false`)\
  Pass a prop to all components with a serialized position
  (`data-sourcepos="3:1-3:13"`)
- `rawSourcePos` (`boolean`, default: `false`)\
  Pass a prop to all components with their [position][]
  (`sourcePosition: {start: {line: 3, column: 1}, end:…}`)
- `includeElementIndex` (`boolean`, default: `false`)\
  Pass the `index` (number of elements before it) and `siblingCount` (number
  of elements in parent) as props to all components
- `allowedElements` (`Array.<string>`, default: `undefined`)\
  Tag names to allow (can’t combine w/ `disallowedElements`).
  By default all elements are allowed
- `disallowedElements` (`Array.<string>`, default: `undefined`)\
  Tag names to disallow (can’t combine w/ `allowedElements`).
  By default no elements are disallowed
- `allowElement` (`(element, index, parent) => boolean?`, optional)\
  Function called to check if an element is allowed (when truthy) or not.
  `allowedElements` / `disallowedElements` is used first!
- `unwrapDisallowed` (`boolean`, default: `false`)\
  Extract (unwrap) the children of not allowed elements.
  By default, when `strong` is not allowed, it and it’s children is dropped,
  but with `unwrapDisallowed` the element itself is dropped but the children
  used
- `linkTarget` (`string` or `(href, children, title) => string`, optional)\
  Target to use on links (such as `_blank` for `<a target="_blank"…`)
- `transformLinkUri` (`(href, children, title) => string`, default:
  [`./uri-transformer.js`][uri], optional)\
  URL to use for links.
  The default allows only `http`, `https`, `mailto`, and `tel`, and is
  available at `ReactMarkdown.uriTransformer`.
  Pass `null` to allow all URLs.
  See [security][]
- `transformImageUri` (`(src, alt, title) => string`, default:
  [`./uri-transformer.js`][uri], optional)\
  Same as `transformLinkUri` but for images
- `components` (`Object.<string, Component>`, default: `{}`)\
  Object mapping tag names to React components
- `remarkPlugins` (`Array.<Plugin>`, default: `[]`)\
  List of [remark plugins][remark-plugins] to use.
  See the next section for examples on how to pass options
- `rehypePlugins` (`Array.<Plugin>`, default: `[]`)\
  List of [rehype plugins][rehype-plugins] to use.
  See the next section for examples on how to pass options

Nunc vel lectus ornare, rhoncus enim interdum, tristique lectus. Donec auctor sapien arcu, aliquam hendrerit mauris feugiat a. Vestibulum feugiat commodo venenatis. Phasellus accumsan dui sed magna ultrices finibus. Pellentesque auctor libero dui. Praesent faucibus elit id pulvinar egestas. In hac habitasse platea dictumst. Sed mattis neque ut condimentum vestibulum. Ut ornare enim ex, eget scelerisque nunc accumsan eget. Cras eleifend ullamcorper nunc aliquet dapibus.

Nunc vel lectus ornare, rhoncus enim interdum, tristique lectus. Donec auctor sapien arcu, aliquam hendrerit mauris feugiat a. Vestibulum feugiat commodo venenatis. Phasellus accumsan dui sed magna ultrices finibus. Pellentesque auctor libero dui. Praesent faucibus elit id pulvinar egestas. In hac habitasse platea dictumst. Sed mattis neque ut condimentum vestibulum. Ut ornare enim ex, eget scelerisque nunc accumsan eget. Cras eleifend ullamcorper nunc aliquet dapibus.Nunc vel lectus ornare, rhoncus enim interdum, tristique lectus. Donec auctor sapien arcu, aliquam hendrerit mauris feugiat a. Vestibulum feugiat commodo venenatis. Phasellus accumsan dui sed magna ultrices finibus. Pellentesque auctor libero dui. Praesent faucibus elit id pulvinar egestas. In hac habitasse platea dictumst. Sed mattis neque ut condimentum vestibulum. Ut ornare enim ex, eget scelerisque nunc accumsan eget. Cras eleifend ullamcorper nunc aliquet dapibus.
