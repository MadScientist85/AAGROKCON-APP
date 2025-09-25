import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background dark:bg-gray-950">
      <main className="flex-1 p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">GrokCon Empire Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Your AI-powered government contracting platform
          </p>
          
          <div className="flex gap-4 mt-6">
            <Link 
              href="/api/govcon/opportunities" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
            >
              Browse Opportunities
            </Link>
            <Link 
              href="/api/bid-generator" 
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Generate Bid
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
