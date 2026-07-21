import React, { useEffect, useState } from 'react';
import { checkBackendHealth, HealthStatus } from '../../lib/api';
import { Wifi, WifiOff, RefreshCw, AlertCircle } from 'lucide-react';

export default function DevApiIndicator() {
  const [status, setStatus] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const isDev = (import.meta as any).env?.DEV;

  const triggerCheck = async () => {
    setLoading(true);
    const result = await checkBackendHealth();
    setStatus(result);
    setLoading(false);
  };

  useEffect(() => {
    if (!isDev) return;
    triggerCheck();
  }, [isDev]);

  if (!isDev) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-3 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-800 flex flex-col gap-2 max-w-xs font-mono text-[11px] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-2">
        <span className="text-slate-400 font-bold tracking-widest uppercase">
          Dev API Status
        </span>
        <button
          onClick={triggerCheck}
          disabled={loading}
          className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors disabled:opacity-50 cursor-pointer"
          title="Retry Connection Check"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        {loading ? (
          <>
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-400">Pinging endpoint...</span>
          </>
        ) : status?.connected ? (
          <>
            <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-emerald-400 font-semibold">Backend Connected</span>
              <span className="text-[9px] text-slate-400 truncate">
                {status.message}
              </span>
            </div>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4 text-rose-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-rose-400 font-semibold">Backend Unavailable</span>
              {status?.details && (
                <span className="text-[9px] text-rose-300/80 max-w-[180px] break-words">
                  {status.details}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      <div className="text-[9px] text-slate-500 flex items-center gap-1 mt-1 border-t border-slate-800/50 pt-1.5">
        <AlertCircle className="w-3 h-3 text-slate-500 shrink-0" />
        <span>Development indicator only</span>
      </div>
    </div>
  );
}
