import {
  EyeOff,
  ArrowDownWideNarrow,
  Filter,
  LayoutGrid,
  ChevronRight,
  Upload,
  Download,
  Share2,
  GitFork,
  Plus
} from 'lucide-react';

const ActionToolbar = () => {
  return (
    <div className="flex justify-between items-center border-b bg-white px-4 py-2 text-sm text-gray-600">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 hover:text-black">
          <span>Tool bar</span>
          <ChevronRight className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <EyeOff className="w-4 h-4" />
          <span>Hide fields</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <ArrowDownWideNarrow className="w-4 h-4" />
          <span>Sort</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <LayoutGrid className="w-4 h-4" />
          <span>Cell view</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 border px-2 py-1 rounded bg-gray-50 hover:bg-gray-100">
          <Upload className="w-4 h-4" />
          Import
        </button>
        <button className="flex items-center gap-1 border px-2 py-1 rounded bg-gray-50 hover:bg-gray-100">
          <Download className="w-4 h-4" />
          Export
        </button>
        <button className="flex items-center gap-1 border px-2 py-1 rounded bg-gray-50 hover:bg-gray-100">
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button className="flex items-center gap-1 bg-green-700 text-white px-3 py-1.5 rounded hover:bg-green-800">
          <GitFork className="w-4 h-4 rotate-180" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default ActionToolbar;
