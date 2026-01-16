import {
  LucideIcon,
  LucideProps,
  Settings,
  Settings2,
  Layers,
  Music,
  Moon,
  Sun,
  Box,
  LayoutList,
  Search,
  Copy,
  ChevronDown,
  Minus,
  Plus,
  PlusCircle,
  RefreshCw,
  Trash2,
  GlobeLock,
  Monitor,
  Tablet,
  Smartphone,
  Image,
  Images,
  ImagePlus,
  Check,
  CircleCheck,
  SquareCheckBig,
  MapPin,
  Bookmark,
  Play,
  CircleQuestionMark,
  TriangleAlert,
  Info,
  MapPinPlus,
  Target,
  ZoomIn,
  ZoomOut,
  ArrowUpFromLine,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  ArrowDownFromLine,
  PencilLine,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Ellipsis,
  Link,
  Unlink,
  ExternalLink,
  Undo2,
  Redo2,
  List,
  File,
  FileText,
  MousePointer2,
  MessageSquareText,
  MessageSquareOff,
  LayoutDashboard,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Layout,
  RotateCcw,
  Maximize,
  Maximize2,
  Minimize,
  Minimize2
} from "lucide-react";

export type Icon = LucideIcon;


export const Icons = {
  Settings: Settings,
  Properties: Settings2,
  Scenes: Layers,
  Music: Music,
  Dark: Moon,
  Light: Sun,
  Box: Box,
  LayoutList: LayoutList,
  Search: Search,
  Copy: Copy,
  ChevronDown: ChevronDown,
  Minus: Minus,
  Plus: Plus,
  PlusCircle: PlusCircle,
  Refresh: RefreshCw,
  Trash: Trash2,
  Permissions: GlobeLock,
  Desktop: Monitor,
  Tablet: Tablet,
  Smartphone: Smartphone,
  Image: Image,
  Images: Images,
  ImagePlus: ImagePlus,
  Check: Check,
  CircleCheck: CircleCheck,
  SquareCheckBig: SquareCheckBig,
  MapPin: MapPin,
  Bookmark: Bookmark,
  Start: Play,
  Help: CircleQuestionMark,
  Alert: TriangleAlert,
  Info: Info,
  MapPinPlus: MapPinPlus,
  Target: Target,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut,
  ArrowUpFromLine: ArrowUpFromLine,
  ArrowLeftFromLine: ArrowLeftFromLine,
  ArrowRightFromLine: ArrowRightFromLine,
  ArrowDownFromLine: ArrowDownFromLine,
  Edit: PencilLine,
  Ellipsis: Ellipsis,
  AlignLeft: AlignLeft,
  AlignCenter: AlignCenter,
  AlignRight: AlignRight,
  AlignJustify: AlignJustify,
  Link: Link,
  Unlink: Unlink,
  FollowLink: ExternalLink,
  Undo: Undo2,
  Redo: Redo2,
  Maximize: Maximize2,
  Minimize: Minimize2,
  List: List,
  File: File,
  FileText: FileText,
  MousePpointer: MousePointer2,
  MessageSquareText: MessageSquareText,
  MessageSquareOff: MessageSquareOff,
  LayoutDashboard: LayoutDashboard,
  VolumeOn: Volume2,
  VolumeOff: VolumeX,
  Layout: Layout,
  Reset: RotateCcw,
  Bold: Bold,
  Italic: Italic,
  Underline: Underline,
  Code: Code,
  Strikethrough: Strikethrough,
  BulletedList: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 6C7 5.44772 7.44772 5 8 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H8C7.44772 7 7 6.55228 7 6Z" />
      <path d="M7 12C7 11.4477 7.44772 11 8 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8C7.44772 13 7 12.5523 7 12Z" />
      <path d="M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z" />
      <path d="M2 6C2 5.44772 2.44772 5 3 5H3.01C3.56228 5 4.01 5.44772 4.01 6C4.01 6.55228 3.56228 7 3.01 7H3C2.44772 7 2 6.55228 2 6Z" />
      <path d="M2 12C2 11.4477 2.44772 11 3 11H3.01C3.56228 11 4.01 11.4477 4.01 12C4.01 12.5523 3.56228 13 3.01 13H3C2.44772 13 2 12.5523 2 12Z" />
      <path d="M2 18C2 17.4477 2.44772 17 3 17H3.01C3.56228 17 4.01 17.4477 4.01 18C4.01 18.5523 3.56228 19 3.01 19H3C2.44772 19 2 18.5523 2 18Z" />
    </svg>
  ),
  NumberedList: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9 6C9 5.44772 9.44772 5 10 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H10C9.44772 7 9 6.55228 9 6Z" />
      <path d="M9 12C9 11.4477 9.44772 11 10 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H10C9.44772 13 9 12.5523 9 12Z" />
      <path d="M9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18Z" />
      <path d="M3 6C3 5.44772 3.44772 5 4 5H5C5.55228 5 6 5.44772 6 6V10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10V7C3.44772 7 3 6.55228 3 6Z" />
      <path d="M3 10C3 9.44772 3.44772 9 4 9H6C6.55228 9 7 9.44772 7 10C7 10.5523 6.55228 11 6 11H4C3.44772 11 3 10.5523 3 10Z" />
      <path d="M5.82219 13.0431C6.54543 13.4047 6.99997 14.1319 6.99997 15C6.99997 15.5763 6.71806 16.0426 6.48747 16.35C6.31395 16.5814 6.1052 16.8044 5.91309 17H5.99997C6.55226 17 6.99997 17.4477 6.99997 18C6.99997 18.5523 6.55226 19 5.99997 19H3.99997C3.44769 19 2.99997 18.5523 2.99997 18C2.99997 17.4237 3.28189 16.9575 3.51247 16.65C3.74323 16.3424 4.03626 16.0494 4.26965 15.8161C4.27745 15.8083 4.2852 15.8006 4.29287 15.7929C4.55594 15.5298 4.75095 15.3321 4.88748 15.15C4.96287 15.0495 4.99021 14.9922 4.99911 14.9714C4.99535 14.9112 4.9803 14.882 4.9739 14.8715C4.96613 14.8588 4.95382 14.845 4.92776 14.8319C4.87723 14.8067 4.71156 14.7623 4.44719 14.8944C3.95321 15.1414 3.35254 14.9412 3.10555 14.4472C2.85856 13.9533 3.05878 13.3526 3.55276 13.1056C4.28839 12.7378 5.12272 12.6934 5.82219 13.0431Z" />
    </svg>
  ),
  IncreaseIndent: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2Zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6Z" />
    </svg>
  ),
  DecreaseIndent: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2Zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2Z" />
    </svg>
  ),
  Paragraph: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 7,4 C 6.4477381,4.0000552 6.0000552,4.4477381 6,5 v 14 c 0,0.552285 0.4477153,1 1,1 0.5522847,0 1,-0.447715 1,-1 v -6 h 7 c 1.138889,0 2.062907,-0.733622 2.556641,-1.597656 C 18.050375,10.538309 18.25,9.5178571 18.25,8.5 18.25,7.4821429 18.050375,6.4616909 17.556641,5.5976562 17.062907,4.7336216 16.138889,4 15,4 Z m 1,2 h 7 c 0.361111,0 0.562093,0.1413784 0.818359,0.5898437 C 16.074625,7.0383091 16.25,7.7678571 16.25,8.5 c 0,0.7321429 -0.175375,1.4616909 -0.431641,1.910156 C 15.562093,10.858622 15.361111,11 15,11 H 8 Z" />
    </svg>
  ),
  H1: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 5,5 C 5,4.44772 4.55228,4 4,4 3.44772,4 3,4.44772 3,5 v 14 c 0,0.5523 0.44772,1 1,1 0.55228,0 1,-0.4477 1,-1 v -6 h 6 v 6 c 0,0.5523 0.4477,1 1,1 0.5523,0 1,-0.4477 1,-1 V 5 C 13,4.44772 12.5523,4 12,4 11.4477,4 11,4.44772 11,5 v 6 H 5 Z" />
      <path d="M21.0001 10C21.0001 9.63121 20.7971 9.29235 20.472 9.11833C20.1468 8.94431 19.7523 8.96338 19.4454 9.16795L16.4454 11.168C15.9859 11.4743 15.8617 12.0952 16.1681 12.5547C16.4744 13.0142 17.0953 13.1384 17.5548 12.8321L19.0001 11.8685V18C19.0001 18.5523 19.4478 19 20.0001 19C20.5524 19 21.0001 18.5523 21.0001 18V10Z" />
    </svg>
  ),
  H2: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 5,5 C 5,4.44772 4.55228,4 4,4 3.44772,4 3,4.44772 3,5 v 14 c 0,0.5523 0.44772,1 1,1 0.55228,0 1,-0.4477 1,-1 v -6 h 6 v 6 c 0,0.5523 0.4477,1 1,1 0.5523,0 1,-0.4477 1,-1 V 5 C 13,4.44772 12.5523,4 12,4 11.4477,4 11,4.44772 11,5 v 6 H 5 Z" />
      <path d="M22.0001 12C22.0001 10.7611 21.1663 9.79297 20.0663 9.42632C18.9547 9.05578 17.6171 9.28724 16.4001 10.2C15.9582 10.5314 15.8687 11.1582 16.2001 11.6C16.5314 12.0418 17.1582 12.1314 17.6001 11.8C18.383 11.2128 19.0455 11.1942 19.4338 11.3237C19.8339 11.457 20.0001 11.7389 20.0001 12C20.0001 12.4839 19.8554 12.7379 19.6537 12.9481C19.4275 13.1837 19.1378 13.363 18.7055 13.6307C18.6313 13.6767 18.553 13.7252 18.4701 13.777C17.9572 14.0975 17.3128 14.5261 16.8163 15.2087C16.3007 15.9177 16.0001 16.8183 16.0001 18C16.0001 18.5523 16.4478 19 17.0001 19H21.0001C21.5523 19 22.0001 18.5523 22.0001 18C22.0001 17.4477 21.5523 17 21.0001 17H18.131C18.21 16.742 18.3176 16.5448 18.4338 16.385C18.6873 16.0364 19.0429 15.7775 19.5301 15.473C19.5898 15.4357 19.6536 15.3966 19.7205 15.3556C20.139 15.0992 20.6783 14.7687 21.0964 14.3332C21.6447 13.7621 22.0001 13.0161 22.0001 12Z" />
    </svg>
  ),
  H3: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 5,5 C 5,4.44772 4.55228,4 4,4 3.44772,4 3,4.44772 3,5 v 14 c 0,0.5523 0.44772,1 1,1 0.55228,0 1,-0.4477 1,-1 v -6 h 6 v 6 c 0,0.5523 0.4477,1 1,1 0.5523,0 1,-0.4477 1,-1 V 5 C 13,4.44772 12.5523,4 12,4 11.4477,4 11,4.44772 11,5 v 6 H 5 Z" />
      <path d="M19.4608 11.2169C19.1135 11.0531 18.5876 11.0204 18.0069 11.3619C17.5309 11.642 16.918 11.4831 16.638 11.007C16.358 10.531 16.5169 9.91809 16.9929 9.63807C18.1123 8.97962 19.3364 8.94691 20.314 9.40808C21.2839 9.86558 21.9999 10.818 21.9999 12C21.9999 12.7957 21.6838 13.5587 21.1212 14.1213C20.5586 14.6839 19.7956 15 18.9999 15C18.4476 15 17.9999 14.5523 17.9999 14C17.9999 13.4477 18.4476 13 18.9999 13C19.2651 13 19.5195 12.8947 19.707 12.7071C19.8946 12.5196 19.9999 12.2652 19.9999 12C19.9999 11.6821 19.8159 11.3844 19.4608 11.2169Z" />
      <path d="M18.0001 14C18.0001 13.4477 18.4478 13 19.0001 13C19.7957 13 20.5588 13.3161 21.1214 13.8787C21.684 14.4413 22.0001 15.2043 22.0001 16C22.0001 17.2853 21.2767 18.3971 20.1604 18.8994C19.0257 19.41 17.642 19.2315 16.4001 18.3C15.9582 17.9686 15.8687 17.3418 16.2001 16.9C16.5314 16.4582 17.1582 16.3686 17.6001 16.7C18.3581 17.2685 18.9744 17.24 19.3397 17.0756C19.7234 16.9029 20.0001 16.5147 20.0001 16C20.0001 15.7348 19.8947 15.4804 19.7072 15.2929C19.5196 15.1054 19.2653 15 19.0001 15C18.4478 15 18.0001 14.5523 18.0001 14Z" />
    </svg>
  ),
  H4: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 5,5 C 5,4.44772 4.55228,4 4,4 3.44772,4 3,4.44772 3,5 v 14 c 0,0.5523 0.44772,1 1,1 0.55228,0 1,-0.4477 1,-1 v -6 h 6 v 6 c 0,0.5523 0.4477,1 1,1 0.5523,0 1,-0.4477 1,-1 V 5 C 13,4.44772 12.5523,4 12,4 11.4477,4 11,4.44772 11,5 v 6 H 5 Z" />
      <path d="M17 9C17.5523 9 18 9.44772 18 10V13H20V10C20 9.44772 20.4477 9 21 9C21.5523 9 22 9.44772 22 10V18C22 18.5523 21.5523 19 21 19C20.4477 19 20 18.5523 20 18V15H17C16.4477 15 16 14.5523 16 14V10C16 9.44772 16.4477 9 17 9Z" />
    </svg>
  ),
  H5: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 5,5 C 5,4.44772 4.55228,4 4,4 3.44772,4 3,4.44772 3,5 v 14 c 0,0.5523 0.44772,1 1,1 0.55228,0 1,-0.4477 1,-1 v -6 h 6 v 6 c 0,0.5523 0.4477,1 1,1 0.5523,0 1,-0.4477 1,-1 V 5 C 13,4.44772 12.5523,4 12,4 11.4477,4 11,4.44772 11,5 v 6 H 5 Z" />
      <path d="m 17,9 a 1.0001,1.0001 0 0 0 -1,1 v 4 a 1.0001,1.0001 0 0 0 1,1 h 3 v 2 h -3 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 4 a 1.0001,1.0001 0 0 0 1,-1 v -4 a 1.0001,1.0001 0 0 0 -1,-1 h -3 v -2 h 3 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" />
    </svg>
  ),
  H6: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 5,5 C 5,4.44772 4.55228,4 4,4 3.44772,4 3,4.44772 3,5 v 14 c 0,0.5523 0.44772,1 1,1 0.55228,0 1,-0.4477 1,-1 v -6 h 6 v 6 c 0,0.5523 0.4477,1 1,1 0.5523,0 1,-0.4477 1,-1 V 5 C 13,4.44772 12.5523,4 12,4 11.4477,4 11,4.44772 11,5 v 6 H 5 Z" />
      <path d="m 17,9 a 1.0001,1.0001 0 0 0 -1,1 v 4 4 a 1.0001,1.0001 0 0 0 1,1 h 4 a 1.0001,1.0001 0 0 0 1,-1 v -4 a 1.0001,1.0001 0 0 0 -1,-1 h -3 v -2 h 3 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z m 1,6 h 2 v 2 h -2 z" />
    </svg>
  ),
  BlockQuote: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 4,3 V 21" />
      <path d="m 8,6 h 9" />
      <path d="m 8,18 h 9" />
      <path d="M 8,12 H 21" />
    </svg>
  ),
  EmbedPlus: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 18.999023 0.99902344 A 0.99975002 0.99975002 0 0 0 18 2.0009766 L 18 3.9990234 L 15.999023 3.9990234 A 1 1 0 0 0 15 5.0009766 A 1 1 0 0 0 15.999023 6 L 18 6 L 18 8.0009766 A 0.99975002 0.99975002 0 0 0 18.999023 9 A 0.99975002 0.99975002 0 0 0 20.000977 8.0009766 L 20.000977 6 L 21.999023 6 A 1 1 0 0 0 23.000977 5.0009766 A 1 1 0 0 0 21.999023 3.9990234 L 20.000977 3.9990234 L 20.000977 2.0009766 A 0.99975002 0.99975002 0 0 0 18.999023 0.99902344 z " />
      <path d="M 9.4013672 7.6611328 A 0.99975002 0.99975002 0 0 0 8.6923828 7.9482422 L 5.3203125 11.267578 A 0.99975002 0.99975002 0 0 0 5.2998047 11.288086 A 0.99975002 0.99975002 0 0 0 5.2880859 11.299805 A 0.99975002 0.99975002 0 0 0 5.2558594 11.334961 A 0.99975002 0.99975002 0 0 0 5.2060547 11.393555 A 0.99975002 0.99975002 0 0 0 5.1708984 11.446289 A 0.99975002 0.99975002 0 0 0 5.1357422 11.499023 A 0.99975002 0.99975002 0 0 0 5.1035156 11.566406 A 0.99975002 0.99975002 0 0 0 5.0771484 11.619141 A 0.99975002 0.99975002 0 0 0 5.0654297 11.651367 A 0.99975002 0.99975002 0 0 0 5.0361328 11.733398 A 0.99975002 0.99975002 0 0 0 5.0332031 11.748047 A 0.99975002 0.99975002 0 0 0 5.0097656 11.862305 A 0.99975002 0.99975002 0 0 0 5.0039062 11.958984 A 0.99975002 0.99975002 0 0 0 5.0009766 12 A 0.99975002 0.99975002 0 0 0 5.0039062 12.041016 A 0.99975002 0.99975002 0 0 0 5.0097656 12.137695 A 0.99975002 0.99975002 0 0 0 5.0332031 12.251953 A 0.99975002 0.99975002 0 0 0 5.0654297 12.348633 A 0.99975002 0.99975002 0 0 0 5.0771484 12.380859 A 0.99975002 0.99975002 0 0 0 5.1035156 12.433594 A 0.99975002 0.99975002 0 0 0 5.1357422 12.500977 A 0.99975002 0.99975002 0 0 0 5.1708984 12.553711 A 0.99975002 0.99975002 0 0 0 5.2060547 12.606445 A 0.99975002 0.99975002 0 0 0 5.2558594 12.665039 A 0.99975002 0.99975002 0 0 0 5.2880859 12.700195 A 0.99975002 0.99975002 0 0 0 5.2998047 12.711914 A 0.99975002 0.99975002 0 0 0 5.3203125 12.732422 L 8.6923828 16.051758 A 0.99975002 0.99975002 0 0 0 10.107422 16.040039 A 0.99975002 0.99975002 0 0 0 10.095703 14.62793 L 7.4238281 12 L 10.095703 9.3720703 A 0.99975002 0.99975002 0 0 0 10.107422 7.9599609 A 0.99975002 0.99975002 0 0 0 9.4013672 7.6611328 z " />
      <path d="M 14.598633 7.6611328 A 0.99975002 0.99975002 0 0 0 13.892578 7.9599609 A 0.99975002 0.99975002 0 0 0 13.904297 9.3720703 L 16.576172 12 L 13.904297 14.62793 A 0.99975002 0.99975002 0 0 0 13.892578 16.040039 A 0.99975002 0.99975002 0 0 0 15.307617 16.051758 L 18.679688 12.732422 A 0.99975002 0.99975002 0 0 0 18.700195 12.711914 A 0.99975002 0.99975002 0 0 0 18.711914 12.700195 A 0.99975002 0.99975002 0 0 0 18.788086 12.615234 A 0.99975002 0.99975002 0 0 0 18.796875 12.603516 A 0.99975002 0.99975002 0 0 0 18.861328 12.506836 A 0.99975002 0.99975002 0 0 0 18.870117 12.492188 A 0.99975002 0.99975002 0 0 0 18.919922 12.389648 A 0.99975002 0.99975002 0 0 0 18.925781 12.375 A 0.99975002 0.99975002 0 0 0 18.963867 12.266602 A 0.99975002 0.99975002 0 0 0 18.966797 12.251953 A 0.99975002 0.99975002 0 0 0 18.990234 12.137695 A 0.99975002 0.99975002 0 0 0 18.996094 12.041016 A 0.99975002 0.99975002 0 0 0 18.999023 12.008789 A 0.99975002 0.99975002 0 0 0 18.999023 11.991211 A 0.99975002 0.99975002 0 0 0 18.996094 11.958984 A 0.99975002 0.99975002 0 0 0 18.990234 11.862305 A 0.99975002 0.99975002 0 0 0 18.966797 11.748047 A 0.99975002 0.99975002 0 0 0 18.963867 11.733398 A 0.99975002 0.99975002 0 0 0 18.925781 11.625 A 0.99975002 0.99975002 0 0 0 18.919922 11.610352 A 0.99975002 0.99975002 0 0 0 18.870117 11.507812 A 0.99975002 0.99975002 0 0 0 18.861328 11.493164 A 0.99975002 0.99975002 0 0 0 18.796875 11.396484 A 0.99975002 0.99975002 0 0 0 18.788086 11.384766 A 0.99975002 0.99975002 0 0 0 18.711914 11.299805 A 0.99975002 0.99975002 0 0 0 18.700195 11.288086 A 0.99975002 0.99975002 0 0 0 18.679688 11.267578 L 15.307617 7.9482422 A 0.99975002 0.99975002 0 0 0 14.598633 7.6611328 z " />
      <path d="M 5,2 C 3.3549904,2 2,3.3549904 2,5 v 14 c 0,1.64501 1.3549904,3 3,3 h 14 c 1.64501,0 3,-1.35499 3,-3 v -7.5 a 1,1 0 0 0 -1,-1 1,1 0 0 0 -1,1 V 19 c 0,0.564129 -0.435871,1 -1,1 H 5 C 4.4358706,20 4,19.564129 4,19 V 5 C 4,4.4358706 4.4358706,4 5,4 h 7.5 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" />
    </svg>
  ),
  FloatLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 3,2 C 3.5523,2 4,2.4070181 4,2.9090908 V 21.090911 c 0,0.50209 -0.4477,0.90909 -1,0.90909 -0.5523,0 -1,-0.407 -1,-0.90909 V 2.9090908 C 2,2.4070181 2.4477,2 3,2 Z" />
      <path d="m 7,7.0000009 c 0,-1.65685 1.34315,-3 3,-3 h 9 c 1.6569,0 3,1.34315 3,3 V 17.000001 c 0,1.6569 -1.3431,3 -3,3 h -9 c -1.65685,0 -3,-1.3431 -3,-3 z m 3,-1 c -0.55228,0 -1,0.44772 -1,1 V 17.000001 c 0,0.5523 0.44772,1 1,1 h 9 c 0.5523,0 1,-0.4477 1,-1 V 7.0000009 c 0,-0.55228 -0.4477,-1 -1,-1 z" />
    </svg>
  ),
  FloatRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m 21,2 c 0.5523,0 1,0.4070181 1,0.9090908 V 21.090911 c 0,0.50209 -0.4477,0.90909 -1,0.90909 -0.5523,0 -1,-0.407 -1,-0.90909 V 2.9090908 C 20,2.4070181 20.4477,2 21,2 Z" />
      <path d="m 2,7.000001 c 0,-1.65685 1.34315,-3 3,-3 h 9 c 1.6569,0 3,1.34315 3,3 v 10 c 0,1.6569 -1.3431,3 -3,3 H 5 c -1.65685,0 -3,-1.3431 -3,-3 z m 3,-1 c -0.55228,0 -1,0.44772 -1,1 v 10 c 0,0.5523 0.44772,1 1,1 h 9 c 0.5523,0 1,-0.4477 1,-1 v -10 c 0,-0.55228 -0.4477,-1 -1,-1 z" />
    </svg>
  ),
  Blank: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
    >
    </svg>
  ),
  Controls: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="18" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  PanelLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect fill="none" width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path fill="currentColor" d="M4 3h5v18h-5" />
    </svg>
  ),
  PanelLeftClosed: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M9 3v18" />
    </svg>
  ),
  PanelRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect fill="none" width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path fill="currentColor" d="M14 3h5v18h-5" />
    </svg>
  ),
  PanelRightClosed: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M15 3v18" />
    </svg>
  ),
  Logo: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      strokeWidth="0"
    >
      <path d="M 10.208394,8.4165794 7,13 v 1.904297 C 8.4746222,14.650323 10.178883,14.5 12,14.5 c 1.821117,0 3.525378,0.150323 5,0.404297 V 13 l -1.687132,-2.095734 a 0.38925055,0.38925055 179.12534 0 0 -0.613726,0.0094 l -0.89392,1.182581 a 0.35955181,0.35955181 1.697884 0 1 -0.585991,-0.01737 L 10.782065,8.4230975 a 0.34740916,0.34740916 0.65097634 0 0 -0.573671,-0.00652 z" />
      <path d="m 12,3.0019531 c -2.9413062,0 -5.6035203,0.3652357 -7.5722656,0.9746094 C 3.4433617,4.2812493 2.6306798,4.6438944 2.0292969,5.0839844 2.0190584,5.0914769 2.0101367,5.0998594 2,5.1074219 1.4147342,5.5440583 1,6.0963257 1,6.7519531 V 17.25 c 0,0.655627 0.4147342,1.207895 1,1.644531 0.010137,0.0076 0.019058,0.01594 0.029297,0.02344 0.6013829,0.440089 1.4140648,0.802734 2.3984375,1.107422 C 4.6108167,20.082057 4.8052569,20.135152 5,20.1875 c 0.3202037,0.08607 0.6506535,0.168491 1,0.242188 V 19.402344 15.097656 14.070312 9.9316406 8.90625 C 5.6475045,8.8282395 5.3146197,8.7427228 5,8.6523438 4.9084559,8.6260463 4.8107533,8.6014868 4.7226562,8.5742188 3.8069082,8.2907727 3.0823656,7.9527915 2.6210938,7.6152344 2.1598217,7.2776771 2,6.9824307 2,6.7519531 2,6.5214758 2.1598217,6.2281823 2.6210938,5.890625 3.0823656,5.5530677 3.8069082,5.2150865 4.7226562,4.9316406 6.5541528,4.3647489 9.1423327,4.0019531 12,4.0019531 c 2.857667,0 5.445848,0.3627958 7.277344,0.9296875 0.915748,0.2834459 1.640291,0.6214271 2.101562,0.9589844 C 21.840179,6.2281823 22,6.5214758 22,6.7519531 22,6.9824307 21.840179,7.2776771 21.378906,7.6152344 20.917635,7.9527915 20.193092,8.2907727 19.277344,8.5742188 19.189244,8.6014867 19.091544,8.6260458 19,8.6523438 18.68538,8.7427228 18.352496,8.8282395 18,8.90625 v 1.0253906 4.1386714 1.027344 4.304688 1.027344 c 0.349347,-0.0737 0.679796,-0.156115 1,-0.242188 0.194743,-0.05235 0.389183,-0.105441 0.572266,-0.162109 0.984372,-0.304688 1.797055,-0.667333 2.398437,-1.107422 0.01024,-0.0075 0.01916,-0.01587 0.0293,-0.02344 0.585265,-0.436636 1,-0.988904 1,-1.644531 V 6.7519531 C 23,6.0963257 22.585265,5.5440583 22,5.1074219 21.98986,5.0998619 21.980943,5.0914764 21.970703,5.0839844 21.369324,4.6438939 20.556638,4.2812493 19.572266,3.9765625 17.60352,3.3671888 14.941306,3.0019531 12,3.0019531 Z M 5.4863281,15.220703 c -0.083305,0.02121 -0.1651347,0.04251 -0.2460937,0.06445 0.080959,-0.02194 0.1627886,-0.04325 0.2460937,-0.06445 z m 13.0273439,0 c 0.0833,0.02121 0.165135,0.04251 0.246094,0.06445 -0.08096,-0.02194 -0.162789,-0.04325 -0.246094,-0.06445 z M 5.2402344,19.214844 c 0.080959,0.02194 0.1627886,0.04325 0.2460937,0.06445 -0.083305,-0.0212 -0.1651347,-0.04251 -0.2460937,-0.06445 z m 13.5195316,0 c -0.08096,0.02194 -0.162789,0.04325 -0.246094,0.06445 0.0833,-0.0212 0.165135,-0.04251 0.246094,-0.06445 z" />
      <path d="M 16,7.5 A 1.5,1.5 0 0 1 14.5,9 1.5,1.5 0 0 1 13,7.5 1.5,1.5 0 0 1 14.5,6 1.5,1.5 0 0 1 16,7.5 Z" />
    </svg>
  ),
  AnchorTopLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 3,17 V 3" />
      <path d="M 17,3 H 3" />
    </svg>
  ),
  AnchorTop: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 19,3 H 5" />
      <path d="M 12,10 V 3" />
    </svg>
  ),
  AnchorTopRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 21,17 V 3" />
      <path d="M 21,3 H 7" />
    </svg>
  ),
  AnchorLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 3,19 V 5" />
      <path d="M 10,12 H 3" />
    </svg>
  ),
  AnchorCenter: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 12,19 V 5" />
      <path d="M 19,12 H 5" />
    </svg>
  ),
  AnchorRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 21,19 V 5" />
      <path d="M 21,12 H 14" />
    </svg>
  ),
  AnchorBottomLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 3,7 V 21" />
      <path d="M 3,21 H 17" />
    </svg>
  ),
  AnchorBottom: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 5,21 H 19" />
      <path d="M 12,21 V 14" />
    </svg>
  ),
  AnchorBottomRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 21,7 V 21" />
      <path d="M 21,21 H 7" />
    </svg>
  ),
  TooltipTop: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m 5.35,2.5 h 13.3 a 2.85,2.436303 0 0 1 2.85,2.4363029 v 5.7645281 a 2.8611469,2.4458318 0 0 1 -2.85043,2.445815 l -2.84996,0.0091 a 2.1658999,1.8515047 0 0 0 -1.590382,0.602153 l -1.999638,1.869627 a 0.2839863,0.24276374 0 0 1 -0.41918,0 L 9.7907726,13.757924 A 2.1658999,1.8515047 0 0 0 8.20039,13.155771 l -2.8499601,-0.0091 A 2.8611469,2.4458318 0 0 1 2.5,10.700831 V 4.9363029 A 2.85,2.436303 0 0 1 5.35,2.5 Z" />
      <path d="M 13,20.5 H 11" strokeWidth="4" />
    </svg>
  ),
  TooltipBottom: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="rotate(180, 12, 12)">
        <path d="m 5.35,2.5 h 13.3 a 2.85,2.436303 0 0 1 2.85,2.4363029 v 5.7645281 a 2.8611469,2.4458318 0 0 1 -2.85043,2.445815 l -2.84996,0.0091 a 2.1658999,1.8515047 0 0 0 -1.590382,0.602153 l -1.999638,1.869627 a 0.2839863,0.24276374 0 0 1 -0.41918,0 L 9.7907726,13.757924 A 2.1658999,1.8515047 0 0 0 8.20039,13.155771 l -2.8499601,-0.0091 A 2.8611469,2.4458318 0 0 1 2.5,10.700831 V 4.9363029 A 2.85,2.436303 0 0 1 5.35,2.5 Z" />
        <path d="M 13,20.5 H 11" strokeWidth="4" />
      </g>
    </svg>
  ),
  TooltipLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="rotate(270, 12, 12)">
        <path d="m 5.35,2.5 h 13.3 a 2.85,2.436303 0 0 1 2.85,2.4363029 v 5.7645281 a 2.8611469,2.4458318 0 0 1 -2.85043,2.445815 l -2.84996,0.0091 a 2.1658999,1.8515047 0 0 0 -1.590382,0.602153 l -1.999638,1.869627 a 0.2839863,0.24276374 0 0 1 -0.41918,0 L 9.7907726,13.757924 A 2.1658999,1.8515047 0 0 0 8.20039,13.155771 l -2.8499601,-0.0091 A 2.8611469,2.4458318 0 0 1 2.5,10.700831 V 4.9363029 A 2.85,2.436303 0 0 1 5.35,2.5 Z" />
        <path d="M 13,20.5 H 11" strokeWidth="4" />
      </g>
    </svg>
  ),
  TooltipRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="rotate(90, 12, 12)">
        <path d="m 5.35,2.5 h 13.3 a 2.85,2.436303 0 0 1 2.85,2.4363029 v 5.7645281 a 2.8611469,2.4458318 0 0 1 -2.85043,2.445815 l -2.84996,0.0091 a 2.1658999,1.8515047 0 0 0 -1.590382,0.602153 l -1.999638,1.869627 a 0.2839863,0.24276374 0 0 1 -0.41918,0 L 9.7907726,13.757924 A 2.1658999,1.8515047 0 0 0 8.20039,13.155771 l -2.8499601,-0.0091 A 2.8611469,2.4458318 0 0 1 2.5,10.700831 V 4.9363029 A 2.85,2.436303 0 0 1 5.35,2.5 Z" />
        <path d="M 13,20.5 H 11" strokeWidth="4" />
      </g>
    </svg>
  ),
  TextStyle: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 1.9999999,20 6.8839175,5.0000002 a 0.6045949,0.7739938 0 0 1 1.1160822,0 L 12.882708,20" />
      <circle cx="18.5" cy="16.5" r="3.5" />
      <path d="m 22,13 v 7" />
      <path d="M 4.604756,14 H 10" />
    </svg>
  ),
  Spinner: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
    </svg>
  ),
  SlotTopLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="2" y="2" rx="2" ry="2" />
    </svg>
  ),
  SlotTop: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="8" y="2" rx="2" ry="2" />
    </svg>
  ),
  SlotTopRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="14" y="2" rx="2" ry="2" />
    </svg>
  ),
  SlotLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="2" y="8" rx="2" ry="2" />
    </svg>
  ),
  SlotRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="14" y="8" rx="2" ry="2" />
    </svg>
  ),
  SlotBottomLeft: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="2" y="14" rx="2" ry="2" />
    </svg>
  ),
  SlotBottom: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="8" y="14" rx="2" ry="2" />
    </svg>
  ),
  SlotBottomRight: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect fill="none" width="8" height="8" x="14" y="14" rx="2" ry="2" />
    </svg>
  ),
  Options: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" />
      <rect width="4" height="4" x="14" y="6" />
      <rect width="4" height="4" x="14" y="14" />
      <path d="M 5.7591549,8 H 10.140845" />
      <path d="m 6,16 h 4" />
    </svg>
  ),
  Control: ({ size, className }: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24} 
      height={size ?? 24} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" />
      <rect width="4" height="4" x="14" y="6" />   
      <rect width="4" height="4" x="14" y="14" />
      <path d="M 5.7591549,8 H 10.140845" />
      <path d="m 6,16 h 4" />
    </svg>
  ),
  AudioPlus: ({ size, className }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 21 11 L 21 16 " />
      <path d="M 9 18 L 9 5 L 12 4.5 " />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
      <line x1="19" y1="8" x2="19" y2="2" />
      <line x1="16" y1="5" x2="22" y2="5" />
    </svg>
  )
};