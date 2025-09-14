import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  tier: 'free' | 'premium' | 'professional' | 'elite';
  loyaltyPoints: number;
  profileImage?: string;
  accountType: 'talent' | 'user' | 'agency';
  isVerified: boolean;
  joinedDate: Date;
}

export const TIER_POINTS = {
  premium: 1000,
  professional: 5000,
  elite: 10000,
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: any) => Promise<void>;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed && parsed.joinedDate) {
          parsed.joinedDate = new Date(parsed.joinedDate);
        }
        setUser(parsed as User);
      } catch {
        // Corrupted storage; clear it
        localStorage.removeItem('user');
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock authentication
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      tier: 'free',
      loyaltyPoints: 100,
      accountType: 'talent',
      isVerified: false,
      joinedDate: new Date()
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signUp = async (userData: any) => {
    const newUser: User = {
      id: Math.random().toString(),
      email: userData.email,
      name: userData.name,
      tier: 'free',
      loyaltyPoints: 50,
      accountType: userData.accountType || 'talent',
      isVerified: false,
      joinedDate: new Date()
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
