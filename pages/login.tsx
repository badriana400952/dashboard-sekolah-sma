import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [check, setCheck] = useState({
    admin: false,
    waliMurid: false,
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col items-center p-8 bg-[#1d293d] text-white rounded-xl w-full">
            <Image src="/log.png" alt="Logo" width={200} height={200} />
            <h1>SIM - Akademik</h1>
            <p>Sistem Informasi Manajemen Akademik</p>
          </div>
          <div className="flex flex-col items-center  w-full ">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form>
              <div className="mb-4">
                <Label htmlFor="username" className="block mb-2">
                  Username
                </Label>
                <Input
                  type="text"
                  id="username"
                  value={""}
                  placeholder="Masukkan Username Anda"
                  className="w-72 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="block mb-2">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Masukkan Password Anda"
                  value={""}
                  className="w-72 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="walmur"
                    className="mr-2"
                    checked={check.waliMurid}
                    onCheckedChange={(checked) =>
                      setCheck({
                        waliMurid: checked === true,
                        admin: false,
                      })
                    } />
                  <Label htmlFor="walmur">Wali Murid</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="adm"
                    className="mr-2"
                    checked={check.admin}
                    onCheckedChange={(checked) =>
                      setCheck({
                        waliMurid: false,
                        admin: checked === true,
                      })
                    }
                  />
                  <Label htmlFor="adm">Admin</Label>
                </div>
              </div>
              <Button
                type="submit"
                className="bg-[#1d293d] w-full text-white py-2 px-4 rounded"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
