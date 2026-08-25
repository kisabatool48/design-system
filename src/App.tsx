import { useState } from 'react';
import { Button } from './components/atoms/Button';
import { Badge } from './components/atoms/Badge';
import { Input } from './components/atoms/Input';
import { Typography } from './components/atoms/Typography';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'link'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    setDark(next);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-darkBg text-lightText dark:text-darkText p-8 space-y-10">
      <header className="flex items-center justify-between">
        <Typography variant="h1">ui-library showcase</Typography>
        <Button variant="outline" onClick={toggleTheme}>
          {dark ? 'Switch to light' : 'Switch to dark'}
        </Button>
      </header>

      <section className="space-y-4">
        <Typography variant="h2">Buttons</Typography>
        {sizes.map((size) => (
          <div key={size} className="flex flex-wrap items-center gap-3">
            <Typography variant="body" muted>
              {size}
            </Typography>
            {variants.map((variant) => (
              <Button key={variant} variant={variant} size={size}>
                {variant}
              </Button>
            ))}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-3">
          <Typography variant="body" muted>
            states
          </Typography>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
          <Button shape="pill">Pill</Button>
          <Button iconOnly icon={<span>×</span>} aria-label="Close" />
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Badges</Typography>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success" showDot>
            Success
          </Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger" showDot>
            Danger
          </Badge>
        </div>
      </section>

      <section className="max-w-md space-y-4">
        <Typography variant="h2">Input</Typography>
        <Input label="Email" placeholder="you@example.com" helperText="We never share your email." />
      </section>

      <section className="space-y-2">
        <Typography variant="h2">Typography</Typography>
        <Typography variant="h3">Heading three</Typography>
        <Typography variant="body">Body text in both themes.</Typography>
        <Typography variant="body" muted>
          Muted body text.
        </Typography>
      </section>
    </div>
  );
}

export default App;
