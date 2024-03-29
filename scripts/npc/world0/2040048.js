/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var status = 0;

function start() {
    cm.sendNext("Have you heard of the beach with a spectacular view of the ocean called #b#m110000000##k, located a little far from #m"+cm.getPlayer().getMapId()+"#? I can take you there right now for free.");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        } if (mode == 0 && status == 1) {
            cm.sendNext("You must have some buiness to take care of here. You must be tired from all that traveling and hunting. Go take some rest, and if you feel like changing your mind, then come talk to me.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            cm.sendYesNo("Okay!! Please beware that you may be running into some monsters around there though, so make sure not to get caught off-guard. Okat, would you like to head over to #m110000000# right now?");
        } else if (status == 2) {
            cm.getPlayer().saveLocation("FLORINA");
            cm.warp(110000000);
            cm.dispose();
		}
    }
}
