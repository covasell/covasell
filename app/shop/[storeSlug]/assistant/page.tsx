import { AssistantPanel } from "@/components/assistant/AssistantPanel";
import { mockStore, mockProducts } from "@/lib/mock-data";

export default function AssistantPage() {
  return (
    <div className="h-screen">
      <AssistantPanel store={mockStore} catalog={mockProducts} />
    </div>
  );
}
