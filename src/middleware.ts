import {auth} from '@/auth';

export default auth((req) => {
  // req.auth contains the session information
});

export const config = {matcher: ['/admin', '/admin/:path*']};
