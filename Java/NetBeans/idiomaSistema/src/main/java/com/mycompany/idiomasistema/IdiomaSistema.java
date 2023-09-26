/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.idiomasistema;

import java.util.Locale;

/**
 *
 * @author WIN10
 */
public class IdiomaSistema {

    public static void main(String[] args) {
        Locale loc = Locale.getDefault();
        System.out.println("O idioma do Sistema é: ");
        System.out.println(loc.getDisplayLanguage());
    }
}
