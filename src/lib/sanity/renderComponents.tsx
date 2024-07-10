import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { PortableTextComponentProps } from '@portabletext/react';

const SampleImageComponent = ({ value, isInline }: PortableTextComponentProps<any>) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        display: isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Add other custom types if needed
  },
  marks: {
    em: ({ children }: PortableTextComponentProps<any>) => <em className="text-gray-600 font-semibold">{children}</em>,
    link: ({ value, children }: PortableTextComponentProps<any>) => {
      const href = value?.href;
      const target = href?.startsWith('http') ? '_blank' : undefined;
      return (
        <a
          className="text-orange-400"
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: PortableTextComponentProps<any>) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }: PortableTextComponentProps<any>) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
    h3: ({ children }: PortableTextComponentProps<any>) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
    h4: ({ children }: PortableTextComponentProps<any>) => <h4 className="text-xl font-bold my-1">{children}</h4>,
    normal: ({ children }: PortableTextComponentProps<any>) => <p className="text-base my-2">{children}</p>,
    blockquote: ({ children }: PortableTextComponentProps<any>) => <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4">{children}</blockquote>,
    customHeading: ({ children }: PortableTextComponentProps<any>) => <h2 className="text-lg text-primary text-purple-700">{children}</h2>,
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => <ul className="list-disc list-inside my-4">{children}</ul>,
    number: ({ children }: PortableTextComponentProps<any>) => <ol className="list-decimal list-inside my-4">{children}</ol>,
    checkmarks: ({ children }: PortableTextComponentProps<any>) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<any>) => <li className="ml-4">{children}</li>,
    number: ({ children }: PortableTextComponentProps<any>) => <li className="ml-4">{children}</li>,
    checkmarks: ({ children }: PortableTextComponentProps<any>) => <li>✅ {children}</li>,
  },
};

export default components;