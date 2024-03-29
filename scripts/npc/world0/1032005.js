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
/**
-- Odin JavaScript --------------------------------------------------------------------------------
	VIP Cab - Victoria Road : Ellinia (101000000)
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
    1.0 - First Version by Xterminator
    2.0 - Second Version by Moogra
    2.1 - Clean up By Moogra
---------------------------------------------------------------------------------------------------
**/

var status = 0;

function start() {
    cm.sendNext("Hi there! This cab is for VIP customers only. Instead of just taking you to different towns like the regular cabs, we offer a much better service worthy of VIP class. We'll take you safely to the \r\n#bAnt Tunnel#k.");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendNext("This town also has a lot to offer. Find us if and when you feel the need to go to the Ant Tunnel Park.");
            cm.dispose();
            return;
        }
        status++;
        if (status == 0) 
            cm.sendNext("Hi there! This cab is for VIP customers only. Instead of just taking you to different towns like the regular cabs, we offer a much better service worthy of VIP class. We'll take you safely to the \r\n#bAnt Tunnel#k.");
        else if (status == 1) {
            cm.sendYesNo("The Ant Tunnel is located deep inside in the dungeon that's placed at the center of the Victoria Island, where the 24 Hr Mobile Store is. Would you like to go there?");
        } else if (status == 2) {
            cm.warp(105070001, 0);
            cm.dispose();
        }
    }
}