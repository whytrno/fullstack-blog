<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;

class AuthController extends Controller
{

    // TODO: Untuk menangani undifined route login. 
    // Tambahkan Accept:application/json pada header
    // Yang menandakan bahwa ini merupakan backend dan tidak 
    // me return ke dalam page

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // TODO: Jika ingin menggunakan route tanpa login, harus ditambahkan disini
        $this->middleware('auth:api', ['except' => ['register', 'login']]);
    }

    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        }

        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),
        ]);

        if ($user) {
            return response()->json(['message' => 'User created successfully'], 201);
        } else {
            return response()->json(['message' => 'User creation failed'], 400);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            // TODO: Batas waktu login 1 jam
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
