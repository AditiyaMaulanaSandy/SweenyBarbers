import { useEffect, useState } from "react"
import { User } from "lucide-react"
import { useQRCode } from 'next-qrcode';

interface MembershipCardProps {
  userHash: string
  points: number
  currentSpend: number
  targetSpend: number
}

interface UserData {
  name: string
  membershipLevel: number | string
  email: string
  address: string
}

export default function MembershipCard({
  userHash,
  points,
  currentSpend,
  targetSpend,
}: MembershipCardProps) {
  const [user, setUser] = useState<UserData | null>(null)
  const [showQR, setShowQR] = useState(false)

  const { Canvas } = useQRCode();

  useEffect(() => {
    if (typeof window !== "undefined" && userHash) {
      const userStr = localStorage.getItem(userHash)
      if (userStr) {
        setUser(JSON.parse(userStr))
      }
    }
  }, [userHash])

  if (!user) {
    return (
      <div className="w-full max-w-md flex flex-col items-center bg-[#2a2018] text-white rounded-lg p-6 space-y-6">
        <p>Loading membership data...</p>
      </div>
    )
  }

  // Calculate progress percentage
  const progressPercentage = (currentSpend / targetSpend) * 100

  return (
    <div className="w-full max-w-md flex flex-col items-center bg-[#2a2018] text-white rounded-lg p-6 space-y-6">
      {/* Avatar */}
      <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
        <User className="w-12 h-12 text-[#2a2018]" strokeWidth={1.5} />
      </div>

      {/* User info */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-light">Hi, {user.name}</h1>
        <p className="text-lg">You have {points.toLocaleString().replace(",", ".")} point</p>
      </div>

      {/* Membership level */}
      <div className="flex items-center gap-2">
        <span>Membership Level:</span>
        <span className="font-semibold">{user.membershipLevel}</span>
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border-2 border-[#2a2018]"></div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full space-y-2">
        <div className="flex justify-between text-sm">
          <span>Current Spend</span>
          <span>To Level Up</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>{currentSpend.toLocaleString().replace(",", ".")}</span>
          <span>{targetSpend.toLocaleString().replace(",", ".")}</span>
        </div>
        <div className="w-full h-6 bg-[#2a2018] rounded-md border border-[#5a4a3a] overflow-hidden">
          <div className="h-full bg-[#f0c27a]" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* User details */}
      <div className="w-full border border-[#5a4a3a] rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span>Email</span>
          <span>{user.email}</span>
        </div>
        <div className="flex justify-between">
          <span>Address</span>
          <span>{user.address}</span>
        </div>
      </div>

      {/* Show QR button */}
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition-colors"
        onClick={() => setShowQR(true)}
      >
        Show QR Code
      </button>

      {/* Logout button */}
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition-colors"
        onClick={() => {
          localStorage.removeItem("isLoggedIn_sweeney")
          window.location.reload()
        }}
      >
        LOGOUT
      </button>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setShowQR(false)}
              aria-label="Close"
            >
              &times;
            </button>   
            <h2 className="text-xl font-bold mb-4 text-black">Your Membership QR Code</h2>
            <Canvas
                text={userHash}
                options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                    dark: '#010599FF',
                    light: '#FFBF60FF',
                    },
                }}
            />
            <p className="mt-4 text-black text-center break-all">{user.email}</p>
          </div>
        </div>
      )}
    </div>
  )
}
