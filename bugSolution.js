```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

function MyComponent() {
  const router = useRouter();

  const handleLinkClick = (href) => {
    router.push(href);
  };

  return (
    <div>
      <a href="/" onClick={() => handleLinkClick('/')}>
        Home
      </a>
      <a href="/about" onClick={() => handleLinkClick('/about')}>
        About
      </a>
    </div>
  );
}

export default MyComponent;
```